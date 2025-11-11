import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// 🔠 Thunder: fonte local (para títulos)
const thunder = localFont({
  src: "../public/fonts/Thunder-BoldLC.otf",
  variable: "--font-thunder",
  weight: "700",
  style: "normal",
});

export const metadata: Metadata = {
  title: "Portfolio Melissa Simonett",
  description: "",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* 🔤 Importa a fonte Alfabet da Adobe (Typekit) */}
        <link rel="stylesheet" href="https://use.typekit.net/gin2eul.css"></link>
      </head>
      <body className={`${thunder.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
