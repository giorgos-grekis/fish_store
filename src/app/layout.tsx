import localFont from "next/font/local";
import "./globals.scss";
import type { PropsWithChildren } from "react";
import type { Metadata } from "next";

const blanchCaps = localFont({
  src: "fonts/blanch_caps_inline-webfont.woff",
  variable: "--font-1",
  display: "swap",
});

const haymakerWebfont = localFont({
  src: "fonts/haymaker-webfont.woff",
  variable: "--font-2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fish Store",
  description:
    "Explore our premium selection of freshwater and saltwater fish, aquariums, and essential supplies. Visit us for expert advice, quality products, and personalized service to help you create the perfect aquatic environment for your home or office. Shop now for the best deals and exclusive offers!",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={`${blanchCaps.variable} ${haymakerWebfont.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
