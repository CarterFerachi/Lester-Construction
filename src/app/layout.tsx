import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lester Construction | Baton Rouge's Premier Home Remodeling & Concrete Experts",
  description: "Lester Construction transforms Baton Rouge homes with expert remodeling, premium concrete work, custom fencing, and professional dirt work. Get your free estimate today.",
  keywords: "home remodeling Baton Rouge, concrete contractor Louisiana, fencing Baton Rouge, dirt work site preparation, Lester Construction",
  openGraph: {
    title: "Lester Construction | Baton Rouge's Premier Contractor",
    description: "Transforming homes across Baton Rouge with world-class craftsmanship.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-[#080808] text-white overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
