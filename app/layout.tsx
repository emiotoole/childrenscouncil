import type { Metadata } from "next";
import { Fredoka, Comfortaa } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: "Children's Council — Democracy is learned. It starts at four.",
  description:
    "Children's Council runs play-based civic workshops with 4–6 year olds, building the four skills democracy depends on: empathy, navigating difference, long-term thinking, and cooperation.",
  openGraph: {
    title: "Children's Council",
    description: "Democracy is learned. It starts at four.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${comfortaa.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
