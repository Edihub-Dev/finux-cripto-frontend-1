/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  corePlugins: {
    // Disable Tailwind's base reset so existing UI (App.css) is not affected
    preflight: false,
  },
  plugins: [],
}
