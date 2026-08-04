import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'ACMAD | Climate Intelligence for Africa',
  description: 'Providing continental-scale weather monitoring, multi-hazard early warnings, and climate services across Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
