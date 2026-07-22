import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body className="bg-bg font-body text-ink antialiased">{children}</body>
    </html>
  );
}
