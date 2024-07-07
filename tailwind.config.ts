import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        limeGreen: '#30C88F',
        brightCyan: '#2AB6D9',
        darkBlue: '#2D314D',
        GrayBlue: '#9597A5',
      },
    },
  },
  plugins: [],
};
export default config;
