import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      // fontFamily: {
      //   calSans: ['var(--font-calSans)', ...fontFamily.sans],
      //   inter: ['var(--font-inter)', ...fontFamily.sans],
      //   roboto_mono: ['var(--font-roboto_mono)', ...fontFamily.sans],
      // },
    },
  },
  plugins: [],
} satisfies Config;
