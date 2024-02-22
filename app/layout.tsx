import '../styles/globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: [
  "latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
 });

export const metadata: Metadata = {
  title: "Job Platform for junior developers",
  description: "Application for junior developers to find jobs",
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        {children}
        </>
      </body>
    </html>
  );
}
