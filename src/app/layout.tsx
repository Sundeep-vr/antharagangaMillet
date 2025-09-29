import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antharaganga Millet FPO - Empowering Farmers, Enriching Lives",
  description: "Government-recognized Producer Organization (FPO) in Kolar, Karnataka. Promoting millet cultivation, empowering small farmers, and developing rural sectors through sustainable agriculture.",
  keywords: "millets, farmer producer company, FPO, Kolar, Karnataka, sustainable farming, rural development, farmer empowerment",
  authors: [{ name: "Antharaganga Millet FPO" }],
  openGraph: {
    title: "Antharaganga Millet FPO - Empowering Farmers, Enriching Lives",
    description: "Government-recognized Producer Organization promoting millet cultivation and farmer empowerment in Kolar, Karnataka.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
