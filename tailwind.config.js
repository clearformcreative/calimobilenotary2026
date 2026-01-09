/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
 theme: {
  extend: {
    colors: {
      brand: {
      ink: "var(--color-brand-ink)",
      ivory: "var(--color-brand-ivory)",
      stone: "var(--color-brand-stone)",
      taupe: "var(--color-brand-taupe)",
      champagne: "var(--color-brand-champagne)",
      "champagne-soft": "var(--color-brand-champagne-soft)",
      mist: "var(--color-brand-mist)",
      shadow: "var(--color-brand-shadow)"
    }
  }
}

  },
  plugins: []
};
