import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}" // Include all your React files
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use the imported DaisyUI plugin
};