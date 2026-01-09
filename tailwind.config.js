/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
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
