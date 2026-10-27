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
  title: "Agropulse360 | Smarter Livestock Management",
  description:
    "Discover Agropulse360, a developing agricultural technology solution supporting livestock records, veterinary verification, and more trusted connections across Nigeria's livestock value chain.",
  metadataBase: new URL("https://agropulse360.com"),
  openGraph: {
    title: "Agropulse360 | Smarter Livestock Management",
    description:
      "Building a safer, smarter future for livestock farming through organised records, veterinary support, and trusted connections.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
