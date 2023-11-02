import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Cron Jobs",
  description: "Testing Vercel's Cron Job features",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black w-screen h-screen">{children}</body>
    </html>
  );
}
