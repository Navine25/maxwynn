import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../app/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Wynn",
  description: "Max Wynn games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
