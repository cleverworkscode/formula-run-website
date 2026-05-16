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
  title: "Formula Run — F1 + Running",
  description:
    "Every week, a Grand Pursuit. Twenty-four rounds tracking the real F1 calendar. Fastest time scores 25.",
  metadataBase: new URL("https://formularun.app"),
  openGraph: {
    title: "Formula Run — F1 + Running",
    description:
      "Every week, a Grand Pursuit. Twenty-four rounds, real F1 calendar. Climb the championship.",
    url: "https://formularun.app",
    siteName: "Formula Run",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formula Run — F1 + Running",
    description:
      "Every week, a Grand Pursuit. Twenty-four rounds, real F1 calendar. Climb the championship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
