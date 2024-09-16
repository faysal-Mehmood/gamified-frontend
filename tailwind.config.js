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
        "banner-large": ["174px"],
        "big-title": ["50px"],
        "default-title": ["40px"],
        caption: ["20px"],
      },

      colors: {
        "brand-black": "#000000",
        "brand-white": "rgba(255, 255, 255, 0.9)",
        "brand-white-grey": "rgba(255, 255, 255, 0.6)",
        "brand-blue": "#4D89F0",
        "brand-dark-blur": "#191D37",
        background: "var(--background)",
        foreground: "var(--foreground)",
        "light-grey": "rgba(255, 255, 255, 0.7)",
        "half-grey": "rgba(255, 255, 255, 0.05)",
        "half-grey1": "rgba(255, 255, 255, 0.20)",
        "half-grey2": "rgba(255, 255, 255, 0.40)",
      },
      textShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.50)",
      },
      webkitTextStroke: {
        custom: "5px #000",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(90deg, #4D89F0 0%, #9184EA 100%)",
        "circle-gradient":
          "linear-gradient(90deg, rgba(77, 137, 240, 0.20) 0%, rgba(145, 132, 234, 0.20) 100%)",
        "game-hover-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.88%, rgba(0, 0, 0, 0.80) 75.78%)",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
      translate: {
        "-182px-226px": "-182px, 226px",
      },
    },
    letterSpacing: {
      normal: "-0.22px",
      medium: " -0.16px;",
    },

    screens: {
      sm: "640px", //@media (min-width: 640px) { ... }
      md: "768px", //@media (min-width: 768px) { ... }
      xmd: "992px",
      lg: "1024px", //@media (min-width: 1024px) { ... }
      xl: "1280px",
      xxl: "1441px", //@media (min-width: 1280px) { ... }
      "2xl": "1536px",
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
          "-webkit-text-stroke": "4px transparent",
        },
        ".stroke-custom-0": {
          "-webkit-text-stroke": "0 transparent",
        },
        ".text-stroke-outline": {
          " background":
            "-webkit-linear-gradient(90deg, #4D89F0 0%, #9184EA 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          "-webkit-text-stroke": "5px transparent",
          color: "#0D101B",
        },
        ".linear-solid-border": {
          "border-image": "linear-gradient(90deg, #4D89F0 0%, #9184EA 100%)",
          "border-image-slice": "1",
        },
        ".blur-bg": {
          "backdrop-filter": "blur(20px)",
        },

        ".hero-free-win-big-text": {
          // "text-shadow": "0px 4px 4px rgba(0, 0, 0, 0.50)",
          "-webkit-text-stroke-width": "5",
          "-webkit-text-stroke-color": "#000",
          " background": "linear-gradient(90deg, #4D89F0 0%, #9184EA 100%)",
          "background-clip": "text",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".hero-mobile-text-outline": {
          "text-shadow": "0px 2px 2px rgba(0, 0, 0, 0.25)",
          "-webkit-text-stroke-width": "2.5px",
          "-webkit-text-stroke-color": " #FFF",
        },
      });
    },
  ],
};
