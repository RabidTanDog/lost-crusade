/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      dropShadow: {
        highlight: [
          "0 0px 7px rgba(200, 200, 200, 0.35)",
          "0 0px 25px rgba(200, 200, 200, 0.2)",
        ],
      },
    },
  },
};
