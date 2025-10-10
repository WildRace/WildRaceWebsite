import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componets/Navbar";
import Footer from "@/componets/Footer";

export const metadata: Metadata = {
  title: "Wild Race",
  description: "A racing game for wild animals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
