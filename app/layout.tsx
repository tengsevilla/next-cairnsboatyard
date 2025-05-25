import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cairns Boat Yard | Boat Repairs, Docking & Marine Services",
  description:
    "Cairns Boat Yard is your one-stop marine service provider offering expert boat maintenance, docking, safety inspections, boat sales, and repair services in Far North Queensland.",
  keywords: [
    "Cairns boat yard",
    "boat maintenance Cairns",
    "marine docking Cairns",
    "boat antifouling",
    "Propspeed Cairns",
    "boat safety inspection",
    "vessel mooring services",
    "boat sales Cairns",
    "marine repair services"
  ],
  openGraph: {
    title: "Cairns Boat Yard | Full-Service Marine Facility in Cairns",
    description:
      "Offering expert boat repairs, maintenance, docking, inspections, and sales in Cairns. Safe, professional, and locally trusted.",
    url: "https://www.cairnsboatyard.com.au",
    siteName: "Cairns Boat Yard",
    images: [
      {
        url: "https://www.cairnsboatyard.com.au/og-boat-yard.png", // Replace with actual hosted image
        width: 1200,
        height: 630,
        alt: "Cairns Boat Yard - Full Marine Service"
      }
    ],
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gantari.variable} antialiased`}
      >
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
