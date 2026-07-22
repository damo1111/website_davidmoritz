import type { Metadata } from "next";
import { Cormorant, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moritz.life"),
  title: "David Moritz",
  description:
    "Senior product leader. AI builder. 20 years shipping at scale.",
  openGraph: {
    title: "David Moritz",
    description: "Senior product leader. AI builder.",
    url: "https://moritz.life",
    siteName: "David Moritz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "David Moritz",
    description: "Senior product leader. AI builder.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-bg text-text font-body antialiased">{children}</body>
    </html>
  );
}
