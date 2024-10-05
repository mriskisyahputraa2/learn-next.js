"use client";

import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import { poppins } from "../../public/fonts/font";

// nonaktifkan navbar login dan register, ketika masuk kehalaman login dan register
const disableNavbar = ["/login", "/register"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={poppins.className}>
        <SessionProvider>
          {!disableNavbar.includes(pathName) && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
