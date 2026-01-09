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
        champagne: "var(--color-brand-champagne)",
        sand: "var(--color-brand-sand)",
        ivory: "var(--color-brand-ivory)"
      }
    }
  }
}

  },
  plugins: []
};
