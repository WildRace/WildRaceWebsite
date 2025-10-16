import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componets/Navbar";
import Footer from "@/componets/Footer";
import { AuthContext } from "@/service/auth";

export const metadata: Metadata = {
  title: "Wild Race",
  description: "A racing game for wild animals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = null;

  return (
    <html lang="en">
      <body>
        <Navbar />
        {/* <AuthContext.Provider value={user}> */}
        {children}
        {/* </AuthContext.Provider> */}
        <Footer />
      </body>
    </html>
  );
}
