import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cairns Boat Yard",
  description: "Welcome to Cains Boat Yard, your one-stop solution for all boat repair and maintenance needs.",
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
