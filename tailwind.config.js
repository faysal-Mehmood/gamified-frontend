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
        "light-grey": "rgba(255, 255, 255, 0.7)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.50)",
      },
      webkitTextStroke: {
        custom: "5px #000",
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
      medium: " -0.16px;",
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
        ".text-shadow-custom": {
          "text-shadow": "0px 2px 2px rgba(0, 0, 0, 0.50)",
        },
        ".stroke-custom": {
          "-webkit-text-stroke-width": "5px",
          "-webkit-text-stroke-color": "#000",
        },
      });
    },
  ],
};
