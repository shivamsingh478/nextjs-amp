import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#25ae88',
        secondary: '#ebba16',
        accent: '#054a84',
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '992px',
        // => @media (min-width: 960px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '3xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
