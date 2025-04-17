import type { Metadata } from "next";
import "./globals.css";
import Navbar from '@/components/Navbar';




export const metadata: Metadata = {
  title: "eWave Pack",
  description: "La herramienta de democratizacion que revolucionará del marketing digital y el emprendimiento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
