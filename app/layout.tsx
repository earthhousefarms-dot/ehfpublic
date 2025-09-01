import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Earth House Farm - Organic Farm | Fresh Produce | Farm Tours",
  description: "Family-owned organic farm offering fresh vegetables, free-range eggs, raw honey, and farm experiences. Visit us for farm tours, CSA boxes, and workshops.",
  keywords: "organic farm, fresh produce, farm tours, CSA boxes, free-range eggs, raw honey, sustainable farming, local farm, farm events",
  authors: [{ name: "Earth House Farm" }],
  openGraph: {
    title: "Earth House Farm - Growing Healthy Food Since 2015",
    description: "100% organic farm offering fresh produce, farm tours, and educational workshops",
    url: "https://earthhouse.farm",
    siteName: "Earth House Farm",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
