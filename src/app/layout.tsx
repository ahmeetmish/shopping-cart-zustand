import "./globals.css";
import type { Metadata } from "next";
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: "Shopping Cart with Zustand",
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container scroll-smooth antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
