import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mon Chic Vintage Paris',
  description: 'Luxury Vintage Management Suite'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
