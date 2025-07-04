import type { Metadata } from 'next';
import './globals.css';
import MUIProvider from '@/context/MUIProvider';


export const metadata: Metadata = {
  title: 'Dice Game',
  description: 'A simple dice game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MUIProvider>
          {children}
        </MUIProvider>
      </body>
    </html>
  );
}