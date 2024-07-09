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
        'lime-green': '#30C88F',
        'bright-cyan': '#2AB6D9',
        'dark-blue': '#2D314D',
        'gray-blue': '#9597A5',
        'pale-gray': '#FAFAFA',
        'light-gray': '#F4F5F7',
      },
      backgroundImage: {
        'hero-desktop': 'url("/bg-intro-desktop.svg")',
        'hero-mobile': 'url("/bg-intro-mobile.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
