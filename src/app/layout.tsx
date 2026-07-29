import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  Bricolage_Grotesque,
  Public_Sans,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-accent-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
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
      className={`${bricolageGrotesque.variable} ${publicSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg font-body text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
