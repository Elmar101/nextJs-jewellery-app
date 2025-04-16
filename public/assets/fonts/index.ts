import localFont from 'next/font/local';
import { Inter, Roboto_Mono } from 'next/font/google';

export const fontCalSans = localFont({
  src: './CalSans-SemiBold.woff2',
  variable: '--font-calSans',
  display: 'swap',
  weight: '900',
  style: 'normal',
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-inter',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-roboto-mono',
});
