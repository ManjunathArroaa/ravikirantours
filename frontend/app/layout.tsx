import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Ravi Kiran Tours - Divine Journeys Across India',
  description: 'Your trusted partner for pilgrimage tours, temple yatras, and spiritual journeys across India',
  keywords: ['temple tours', 'yatras', 'pilgrimage', 'spiritual tourism', 'India'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <WhatsAppFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
