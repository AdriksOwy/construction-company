import type { Metadata } from "next";
import { Rubik, Oswald } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const rubik = Rubik({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construction company - We build with you in mind",
  description:
    "With over 30 years in the construction industry, our company has built a strong reputation for quality and reliability. We have successfully managed a wide range of projects, from residential to industrial, showcasing our ability to handle diverse challenges with expertise.",
  keywords: "Builders, Construction, Builds",
  authors: { name: "AdriksOwy", url: "https://github.com/AdriksOwy" },
  openGraph: {
    title: "Construction company - We build with you in mind",
    description:
      "With over 30 years in the construction industry, our company has built a strong reputation for quality and reliability. We have successfully managed a wide range of projects, from residential to industrial, showcasing our ability to handle diverse challenges with expertise.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rubik.className} ${oswald.className}`}>
        {children}
      </body>
    </html>
  );
}
