import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tailcolor.top"),
  title: "Free TailwindCSS Web background",
  description:
    " Free Tailwind CSS web background Designed and crafted by Experts to help you build you next website background.",
  alternates: { canonical: "https://tailcolor.top" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default function RootLayout({ children}: Readonly<{children: ReactNode}>) {
  return (
    <html lang="en">
      <head>
      <script defer data-domain="tailcolor.top" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
