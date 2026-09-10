import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coral Coast Divers Mirissa | Scuba Diving & Snorkeling",
  description:
    "Guided scuba diving, reef snorkeling and turtle tours in Mirissa, Sri Lanka. Small groups, experienced local guides, all equipment included.",
  openGraph: {
    title: "Coral Coast Divers Mirissa",
    description:
      "Guided scuba diving, reef snorkeling and turtle tours in Mirissa, Sri Lanka with experienced local guides.",
    type: "website",
    locale: "en_US",
    siteName: "Coral Coast Divers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coral Coast Divers Mirissa",
    description:
      "Guided scuba diving, reef snorkeling and turtle tours in Mirissa, Sri Lanka with experienced local guides.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png?v=2", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico?v=2",
  },
};

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
