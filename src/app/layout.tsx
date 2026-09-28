import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brass & Blade | Master Barbershop in Downtown",
  description:
    "Brass & Blade is a master barbershop in downtown offering classic cuts, hot towel shaves, beard sculpting, and hair color. Book your chair today.",
  keywords: [
    "barbershop",
    "men's haircut",
    "hot towel shave",
    "beard trimming",
    "hair color",
    "downtown barber",
    "grooming",
  ],
  authors: [{ name: "Brass & Blade" }],
  openGraph: {
    title: "Brass & Blade | Master Barbershop in Downtown",
    description:
      "Classic cuts, hot towel shaves, and beard work by master barbers in the heart of downtown.",
    url: "https://brassandblade.example",
    siteName: "Brass & Blade",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brass & Blade | Master Barbershop",
    description:
      "Classic cuts, hot towel shaves, and beard work by master barbers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
