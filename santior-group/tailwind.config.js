/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#14243D",
        "navy-deep": "#0F1A2A",
        "navy-light": "#22334F",
        cream: "#F7F3EB",
        "cream-2": "#FCFBF8",
        gold: "#BE9F62",
        "gold-light": "#D3B678",
        line: "#E6E1D7",
        ink: "#1C2A35",
        "ink-2": "#2C3540",
        muted: "#5C6169",
        "muted-2": "#4A525C",
        faint: "#8C9199",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        page: "1200px",
      },
    },
  },
  plugins: [],
};
