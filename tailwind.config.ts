import { type Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';



export default {
  content: [ './app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'),],
} satisfies Config;
