import hyeon from '@hyeon/tailwindcss-file-input'
import typo from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    hyeon,
    typo,
  ],
}

