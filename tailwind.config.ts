import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        monchic: {
          green: '#1f4b3f',
          cream: '#f7f1e8',
          gold: '#b89355'
        }
      }
    }
  },
  plugins: []
};

export default config;
