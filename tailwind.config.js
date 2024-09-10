/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },

      fontSize: {
        "hero-large": ["180px"],
        "small-heading": ["26px"],
        "medium-heading": ["40px"],
        paragraph: ["26px"],
        "large-heading": ["80px"],
        "small-text": ["22px"],
        subheading: ["40px"],
        "small-paragraph": ["24px"],
        "secondary-heading": ["32px"],
        "button-text": ["22px"],
        "banner-large": ["175px"],
        "big-title": ["50px"],
        "default-title": ["40px"],
        caption: ["20px"],
      },

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
    letterSpacing: {
      normal: "-0.22px",
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
