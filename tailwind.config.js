/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      dropShadow: {
        highlight: [
          "0 0px 7px rgba(74, 168, 133, 0.35)",
          "0 0px 25px rgba(34, 211, 238, 0.2)",
        ],
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|border)-(green|sky|violet|red|amber)-(600|800)/,
    },
  ],
};
