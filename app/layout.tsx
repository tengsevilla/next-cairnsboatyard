import type { Metadata } from "next";
import { Gantari } from "next/font/google";
import "./globals.css";

const gantari = Gantari({
  variable: "--font-gantari",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cains Boat Yard",
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
      </body>
    </html>
  );
}
