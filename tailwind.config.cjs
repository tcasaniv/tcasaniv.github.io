/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        header: "#1f2937",
        "header-foreground": "#fff",
        "header-dropdown": "#1e293b",
        "header-dropdown-foreground": "#fff",
        link: "#2563EB",
        "link-dark": "#60a5fa",
        primary: {
          500: "#2563EB",
          600: "#1D4ED8",
        },
        "primary-foreground": "#fff",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.link"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
