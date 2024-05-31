/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      "primary": "var(--primary)",
      "secondary": "var(--secondary)",
      "tertiary": "var(--tertiary)",
      "border": "var(--border)",
      "failure": "var(--failure)",
      "success": "var(--success)",
      "warning": "var(--warning)",
      "background1": "var(--background1)",
      "background2": "var(--background2)",
      "background3": "var(--background3)",
      "text1": "var(--text1)",
      "text2": "var(--text2)"
    }
  },
  plugins: [],
}

