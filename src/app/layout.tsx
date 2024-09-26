import type { Metadata } from 'next';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../assets/css/globals.css';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'SmashHaus',
  description: 'Instantly access music licensing, exposure opportunities, and more from a global network of companies actively seeking music.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
