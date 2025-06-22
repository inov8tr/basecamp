import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        basecamp: {
          sand: '#f3e9d4',
          cream: '#fdf4e3',
          charcoal: '#2e2e2e',
          pine: '#275f43',
          forest: '#2f4d3b',
          orange: '#f26932',
          plum: '#5e316f',
          twilight: '#2f3c53',
          clay: '#ba5c3d',
        },
        gradient: {
          sunset: ['#f26932', '#5e316f'],
        },
      },
      fontFamily: {
        base: ['"Inter"', 'sans-serif'], // or use a slab serif like 'Roboto Slab'
        heading: ['"Oswald"', 'sans-serif'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(to right, #f26932, #5e316f)',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [],
};
export default config;
