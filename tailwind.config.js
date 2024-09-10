/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-black": "#000000",
        "brand-white": "rgba(255, 255, 255, 0.9)",
        "brand-white-grey": "rgba(255, 255, 255, 0.6)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(90deg, #4D89F0 0%, #9184EA 100%)",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".bg-clip-text": {
          "-webkit-background-clip": "text",
          "background-clip": "text",
        },
        ".text-fill-transparent": {
          "-webkit-text-fill-color": "transparent",
        },
      });
    },
  ],
};

{
  /* <div class="bg-main-gradient bg-clip-text text-fill-transparent">
  Gradient Text Example
</div> */
}
