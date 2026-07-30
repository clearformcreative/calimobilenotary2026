"use client";

import { useMemo, useRef, useState } from "react";

// ---------------------------------------------------------------------------
// Pricing logic (mirrors the public packages + travel notes in src/content/site.ts).
// Keep these in sync with pricingPackages / pricingNotes if the public rates change.
// ---------------------------------------------------------------------------

// Signature package tiers. `maxSignatures` is the inclusive upper bound.
const PACKAGES = [
  { name: "Basic Package", maxSignatures: 2, price: 85 },
  { name: "Mid Package", maxSignatures: 4, price: 100 },
];

// Beyond the largest package (4 signatures), charge $15 per additional signature.
const EXTRA_SIGNATURE_FEE = 15;

// Travel: free within the service area, then a flat fee per block beyond it.
// The free radius is 25 mi each way (50 mi round trip). Overage is billed on the
// ONE-WAY distance beyond the radius — not the round trip — so a stop 50 mi past
// the radius is charged for 50 extra miles, not 100.
const FREE_ONE_WAY_MILES = 25;
const TRAVEL_BLOCK_MILES = 25;
const TRAVEL_BLOCK_FEE = 50;

// After-hours add-ons.
const AFTER_HOURS = {
  none: { label: "None (standard hours)", short: "Standard", fee: 0 },
  evening: { label: "Evening or weekend (+$25)", short: "Evening / weekend", fee: 25 },
  late: { label: "Late night (+$50)", short: "Late night", fee: 50 },
} as const;

type AfterHoursKey = keyof typeof AFTER_HOURS;

// Origin: 5737 Kanan Road, Agoura Hills, CA 91301 — distances are round trip from here.
const ORIGIN = { lat: 34.1555345, lon: -118.758043 };

// Straight-line distance underestimates real driving distance; nudge it up.
const ROAD_FACTOR = 1.4;

function packageFor(signatures: number) {
  const tier = PACKAGES.find((p) => signatures <= p.maxSignatures);
  if (tier) {
    return { name: tier.name, base: tier.price, extraSignatures: 0, extraFee: 0 };
  }
  const top = PACKAGES[PACKAGES.length - 1];
  const extraSignatures = signatures - top.maxSignatures;
  return {
    name: `${top.name} + ${extraSignatures} extra`,
    base: top.price,
    extraSignatures,
    extraFee: extraSignatures * EXTRA_SIGNATURE_FEE,
  };
}

function travelFee(roundTripMiles: number) {
  const oneWayMiles = Math.round(roundTripMiles / 2);
  const extra = oneWayMiles - FREE_ONE_WAY_MILES;
  if (extra <= 0) {
    return { blocks: 0, fee: 0 };
  }
  // Round to the nearest whole block, but always bill at least one block once
  // the stop is past the free radius (no free travel outside the service area).
  const blocks = Math.max(1, Math.round(extra / TRAVEL_BLOCK_MILES));
  return { blocks, fee: blocks * TRAVEL_BLOCK_FEE };
}

function haversineMiles(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 3958.8; // Earth radius in miles
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const METERS_PER_MILE = 1609.344;

// Real round-trip driving distance via the public OSRM routing service (free,
// no API key). Routes office -> destination -> office and returns total miles.
// Falls back to a straight-line estimate (haversine x road factor x 2) if the
// routing service is unreachable, so the calculator never breaks.
async function drivingRoundTripMiles(
  destLat: number,
  destLon: number
): Promise<{ miles: number; method: "driving" | "estimate" }> {
  const o = `${ORIGIN.lon},${ORIGIN.lat}`;
  const d = `${destLon},${destLat}`;
  const url = `https://router.project-osrm.org/route/v1/driving/${o};${d};${o}?overview=false`;
  try {
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error("routing unavailable");
    const data = (await res.json()) as {
      code: string;
      routes?: Array<{ distance: number }>;
    };
    const meters = data.routes?.[0]?.distance;
    if (data.code !== "Ok" || typeof meters !== "number") {
      throw new Error("no route");
    }
    return { miles: Math.round(meters / METERS_PER_MILE), method: "driving" };
  } catch {
    const oneWay = haversineMiles(ORIGIN.lat, ORIGIN.lon, destLat, destLon);
    return { miles: Math.round(oneWay * ROAD_FACTOR * 2), method: "estimate" };
  }
}

type Suggestion = { label: string; lat: number; lon: number };

type PhotonProps = {
  name?: string;
  street?: string;
  housenumber?: string;
  city?: string;
  district?: string;
  county?: string;
  state?: string;
  postcode?: string;
  countrycode?: string;
};

function buildLabel(p: PhotonProps): string {
  const main = [p.housenumber, p.street].filter(Boolean).join(" ") || p.name || "";
  const locality = p.city || p.district || p.county;
  const parts: string[] = [];
  if (main) parts.push(main);
  if (locality && locality !== main) parts.push(locality);
  if (p.state && p.state !== locality) parts.push(p.state);
  if (p.postcode) parts.push(p.postcode);
  return parts.join(", ");
}

// Location autocomplete + geocoding via Photon (Komoot) — free, no API key,
// built for typeahead. Biased toward the office and filtered to US results.
async function photonSearch(
  query: string,
  limit: number,
  signal?: AbortSignal
): Promise<Suggestion[]> {
  const url =
    `https://photon.komoot.io/api/?limit=${limit}&lang=en` +
    `&lat=${ORIGIN.lat}&lon=${ORIGIN.lon}&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { signal, headers: { Accept: "application/json" } });
  const data = (await res.json()) as {
    features?: Array<{
      geometry?: { coordinates?: [number, number] };
      properties?: PhotonProps;
    }>;
  };
  return (data.features ?? [])
    .filter(
      (f) =>
        f.properties?.countrycode === "US" &&
        Array.isArray(f.geometry?.coordinates) &&
        f.geometry!.coordinates!.length === 2
    )
    .map((f) => ({
      label: buildLabel(f.properties as PhotonProps),
      lon: f.geometry!.coordinates![0],
      lat: f.geometry!.coordinates![1],
    }))
    .filter((s) => s.label);
}

const money = (n: number) => `$${n.toFixed(0)}`;

export function InternalCalc() {
  const [signatures, setSignatures] = useState(1);
  const [location, setLocation] = useState("");
  const [roundTripMiles, setRoundTripMiles] = useState(0);
  const [afterHours, setAfterHours] = useState<AfterHoursKey>("none");
  const [lookupState, setLookupState] = useState<
    "idle" | "loading" | "done" | "error"
  >("idle");
  const [lookupLabel, setLookupLabel] = useState("");
  // Which method produced the current mileage: real driving route vs. estimate.
  const [distanceMethod, setDistanceMethod] = useState<"driving" | "estimate">(
    "driving"
  );
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Get round-trip driving distance for coordinates and update the quote.
  async function computeForCoords(lat: number, lon: number, label: string) {
    setShowSuggestions(false);
    setLookupState("loading");
    setLookupLabel("");
    try {
      const roundTrip = await drivingRoundTripMiles(lat, lon);
      setRoundTripMiles(roundTrip.miles);
      setDistanceMethod(roundTrip.method);
      setLookupState("done");
      setLookupLabel(label);
    } catch {
      setLookupState("error");
      setLookupLabel("Lookup failed — check the connection and try again.");
    }
  }

  // Debounced autocomplete as the user types.
  function handleLocationChange(value: string) {
    setLocation(value);
    if (lookupState === "done" || lookupState === "error") setLookupState("idle");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (value.trim().length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    debounceRef.current = setTimeout(async () => {
      if (abortRef.current) abortRef.current.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const results = await photonSearch(value.trim(), 5, controller.signal);
        setSuggestions(results);
        setShowSuggestions(results.length > 0);
      } catch {
        // Aborted or network error — manual Calculate still works.
      }
    }, 350);
  }

  function selectSuggestion(s: Suggestion) {
    setLocation(s.label);
    setSuggestions([]);
    computeForCoords(s.lat, s.lon, s.label);
  }

  // Manual lookup (Calculate button / Enter): geocode the typed text, then route.
  async function lookupDistance() {
    const query = location.trim();
    if (!query) return;
    setShowSuggestions(false);
    setLookupState("loading");
    setLookupLabel("");
    try {
      const results = await photonSearch(query, 1);
      if (!results.length) {
        setLookupState("error");
        setLookupLabel("No match found — try a more specific location.");
        return;
      }
      const top = results[0];
      setLocation(top.label);
      await computeForCoords(top.lat, top.lon, top.label);
    } catch {
      setLookupState("error");
      setLookupLabel("Lookup failed — check the connection and try again.");
    }
  }

  const result = useMemo(() => {
    const sigs = Number.isFinite(signatures) && signatures > 0 ? signatures : 0;
    const pkg = packageFor(sigs);
    const travel = travelFee(roundTripMiles);
    const afterHoursFee = AFTER_HOURS[afterHours].fee;
    const total = pkg.base + pkg.extraFee + travel.fee + afterHoursFee;
    return { pkg, travel, afterHoursFee, total };
  }, [signatures, roundTripMiles, afterHours]);

  const inputClass =
    "w-full rounded-sm border border-brand-stone/70 bg-white px-4 py-3 text-sm text-brand-ink focus:border-brand-champagne focus:outline-none";
  const fieldLabel =
    "text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne";

  const hasLocation = lookupState === "done";

  // Which package tier the current signature count falls into (-1 if none yet).
  const matchedTier = PACKAGES.findIndex(
    (p) => signatures >= 1 && signatures <= p.maxSignatures
  );
  const activeTierIndex =
    matchedTier === -1 && signatures > 4 ? PACKAGES.length - 1 : matchedTier;

  // Travel is billed on the one-way distance beyond the free service radius.
  const oneWayMiles = Math.round(roundTripMiles / 2);
  const extraMiles = Math.max(0, oneWayMiles - FREE_ONE_WAY_MILES);
  // Exact (unrounded) block count, and whether the final count came from the
  // "at least one block" floor rather than normal rounding.
  const exactBlocks = extraMiles / TRAVEL_BLOCK_MILES;
  const flooredToOne = extraMiles > 0 && Math.round(exactBlocks) === 0;

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[1fr_0.8fr] lg:gap-8">
      {/* Inputs */}
      <div className="rounded-xl border border-brand-stone/70 bg-white/90 p-5 shadow-sm sm:p-7">
        <div className="grid gap-7">
          {/* Signatures stepper */}
          <div>
            <span className={fieldLabel}>Number of signatures</span>
            <div className="mt-3 flex items-stretch overflow-hidden rounded-sm border border-brand-stone/70">
              <button
                type="button"
                aria-label="Decrease signatures"
                onClick={() => setSignatures((s) => Math.max(1, s - 1))}
                className="flex w-14 items-center justify-center bg-brand-mist text-2xl text-brand-ink transition hover:bg-brand-stone/40"
              >
                −
              </button>
              <input
                type="number"
                min={1}
                inputMode="numeric"
                value={signatures}
                onChange={(e) =>
                  setSignatures(Math.max(0, parseInt(e.target.value, 10) || 0))
                }
                className="w-full border-x border-brand-stone/70 bg-white px-4 py-3 text-center text-lg font-semibold text-brand-ink focus:outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button
                type="button"
                aria-label="Increase signatures"
                onClick={() => setSignatures((s) => s + 1)}
                className="flex w-14 items-center justify-center bg-brand-mist text-2xl text-brand-ink transition hover:bg-brand-stone/40"
              >
                +
              </button>
            </div>
            <div className="mt-3 space-y-1.5">
              {PACKAGES.map((p, i) => {
                const active = i === activeTierIndex;
                return (
                  <div
                    key={p.name}
                    className={`flex items-center justify-between rounded-sm border px-3 py-2 text-xs transition ${
                      active
                        ? "border-brand-champagne bg-brand-champagne/10 text-brand-ink"
                        : "border-brand-stone/50 text-brand-shadow/70"
                    }`}
                  >
                    <span className={active ? "font-semibold" : ""}>{p.name}</span>
                    <span>
                      Up to {p.maxSignatures} signature
                      {p.maxSignatures === 1 ? "" : "s"} · ${p.price}
                    </span>
                  </div>
                );
              })}
              {signatures > 4 && (
                <p className="px-1 pt-0.5 text-xs text-brand-shadow/60">
                  + ${EXTRA_SIGNATURE_FEE} per signature beyond 4 ({signatures - 4}{" "}
                  extra).
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <span className={fieldLabel}>Location (city, address, or ZIP)</span>
            <div className="mt-3 flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={location}
                  placeholder="Start typing a city, address, or ZIP…"
                  autoComplete="off"
                  onChange={(e) => handleLocationChange(e.target.value)}
                  onFocus={() => {
                    if (suggestions.length) setShowSuggestions(true);
                  }}
                  onBlur={() =>
                    setTimeout(() => setShowSuggestions(false), 150)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      lookupDistance();
                    } else if (e.key === "Escape") {
                      setShowSuggestions(false);
                    }
                  }}
                  className={inputClass}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <ul className="absolute z-20 mt-1 w-full overflow-hidden rounded-sm border border-brand-stone/70 bg-white shadow-lg">
                    {suggestions.map((s, i) => (
                      <li key={`${s.label}-${i}`}>
                        <button
                          type="button"
                          // Prevent input blur from firing before the click.
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => selectSuggestion(s)}
                          className="block w-full border-b border-brand-stone/30 px-4 py-2.5 text-left text-sm text-brand-ink transition last:border-b-0 hover:bg-brand-mist"
                        >
                          {s.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button
                type="button"
                onClick={lookupDistance}
                disabled={lookupState === "loading" || !location.trim()}
                className="shrink-0 rounded-sm bg-brand-ink px-6 py-3 text-sm font-semibold tracking-[0.08em] text-brand-ivory transition hover:bg-brand-shadow disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {lookupState === "loading" ? "Calculating…" : "Calculate"}
              </button>
            </div>
            {lookupLabel && (
              <p
                className={`mt-2 text-xs ${
                  lookupState === "error" ? "text-red-600" : "text-brand-shadow/70"
                }`}
              >
                {lookupState === "done" ? `Matched: ${lookupLabel}` : lookupLabel}
              </p>
            )}
            {hasLocation && (
              <p className="mt-1 text-xs text-brand-shadow/70">
                {distanceMethod === "driving"
                  ? "Driving round trip from office: "
                  : "Estimated round trip from office: "}
                <strong className="text-brand-ink">{roundTripMiles} mi</strong>
                {distanceMethod === "estimate" && (
                  <span className="text-brand-shadow/50">
                    {" "}
                    (route service unavailable — straight-line estimate)
                  </span>
                )}
              </p>
            )}
          </div>

          {/* After-hours segmented control */}
          <div>
            <span className={fieldLabel}>After-hours surcharge</span>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {(Object.keys(AFTER_HOURS) as AfterHoursKey[]).map((key) => {
                const active = afterHours === key;
                const opt = AFTER_HOURS[key];
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setAfterHours(key)}
                    className={`flex items-center justify-between gap-2 rounded-sm border px-4 py-3 text-left text-sm transition sm:flex-col sm:items-start ${
                      active
                        ? "border-brand-champagne bg-brand-champagne/15 text-brand-ink shadow-sm"
                        : "border-brand-stone/70 bg-white text-brand-shadow/80 hover:border-brand-champagne/60"
                    }`}
                  >
                    <span className="font-semibold">{opt.short}</span>
                    <span
                      className={
                        active ? "text-brand-ink" : "text-brand-shadow/60"
                      }
                    >
                      {opt.fee > 0 ? `+$${opt.fee}` : "$0"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quote — sticky on desktop so it stays visible while editing */}
      <div className="rounded-xl border border-brand-stone/70 bg-brand-ink p-6 text-brand-ivory shadow-lg lg:sticky lg:top-28 sm:p-7">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-champagne">
            Estimated Quote
          </p>
          {hasLocation && (
            <span className="rounded-full bg-brand-champagne/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-champagne">
              {result.pkg.name}
            </span>
          )}
        </div>

        <p className="mt-3 font-display text-6xl font-semibold leading-none">
          {money(result.total)}
        </p>
        {!hasLocation && (
          <p className="mt-3 text-xs text-brand-ivory/60">
            Enter a location to include travel in the total.
          </p>
        )}

        <dl className="mt-7 space-y-3 text-sm">
          <Row label={result.pkg.name} value={money(result.pkg.base)} />
          {result.pkg.extraFee > 0 && (
            <Row
              label={`${result.pkg.extraSignatures} extra signature${
                result.pkg.extraSignatures === 1 ? "" : "s"
              } × $${EXTRA_SIGNATURE_FEE}`}
              value={money(result.pkg.extraFee)}
            />
          )}
          <div className="border-b border-brand-ivory/10 pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className={hasLocation ? "text-brand-ivory/85" : "text-brand-ivory/45"}>
                <span>Travel</span>
                <span className="mt-0.5 block text-[11px] text-brand-ivory/45">
                  {hasLocation
                    ? `${oneWayMiles} mi each way (${roundTripMiles} mi round trip)`
                    : "Awaiting location"}{" "}
                  · first {FREE_ONE_WAY_MILES} mi free, then ${TRAVEL_BLOCK_FEE} per{" "}
                  {TRAVEL_BLOCK_MILES} mi
                </span>
              </div>
              <span
                className={`shrink-0 font-medium ${
                  hasLocation ? "text-brand-ivory" : "text-brand-ivory/45"
                }`}
              >
                {!hasLocation
                  ? "—"
                  : result.travel.fee > 0
                    ? money(result.travel.fee)
                    : "Included"}
              </span>
            </div>
            {hasLocation && result.travel.blocks > 0 && (
              <div className="mt-2 space-y-0.5 rounded-sm bg-brand-ivory/5 px-3 py-2 text-[11px] leading-relaxed text-brand-ivory/60">
                <div className="flex justify-between gap-3">
                  <span>
                    {oneWayMiles} mi each way − {FREE_ONE_WAY_MILES} mi free
                  </span>
                  <span>{extraMiles} mi over</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span>
                    {extraMiles} mi over at {TRAVEL_BLOCK_MILES} mi per block ={" "}
                    {exactBlocks.toFixed(2)}{" "}
                    {flooredToOne ? "→ min 1 block" : "→ round to nearest"}
                  </span>
                  <span>
                    {result.travel.blocks} block
                    {result.travel.blocks === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="flex justify-between gap-3 border-t border-brand-ivory/10 pt-0.5 font-medium text-brand-ivory/80">
                  <span>
                    {result.travel.blocks} × ${TRAVEL_BLOCK_FEE}
                  </span>
                  <span>{money(result.travel.fee)}</span>
                </div>
              </div>
            )}
          </div>
          {result.afterHoursFee > 0 && (
            <Row
              label={AFTER_HOURS[afterHours].short}
              value={money(result.afterHoursFee)}
            />
          )}
        </dl>

        <div className="mt-5 flex items-center justify-between border-t border-brand-ivory/15 pt-4 text-lg font-semibold">
          <span>Total</span>
          <span className="font-display text-2xl">{money(result.total)}</span>
        </div>

        <p className="mt-5 text-[11px] leading-relaxed text-brand-ivory/45">
          {hasLocation && distanceMethod === "driving"
            ? "Internal estimate. Travel uses the actual round-trip driving route from the office."
            : `Internal estimate. Travel falls back to straight-line distance × ${ROAD_FACTOR} round trip when the routing service is unavailable.`}
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  hint,
  muted,
}: {
  label: string;
  value: string;
  hint?: string;
  muted?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-brand-ivory/10 pb-3">
      <div className={muted ? "text-brand-ivory/45" : "text-brand-ivory/85"}>
        <span>{label}</span>
        {hint && (
          <span className="mt-0.5 block text-[11px] text-brand-ivory/45">
            {hint}
          </span>
        )}
      </div>
      <span
        className={`shrink-0 font-medium ${
          muted ? "text-brand-ivory/45" : "text-brand-ivory"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
