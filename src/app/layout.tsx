import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdel | SvelteKit Expert",
  description: "Frontend Engineer with over 4 years of experience in modern web technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex  w-full flex-col items-center bg-background text-foreground">
          <div className="flex flex-1 flex-col justify-between lg:max-w-7xl w-full px-6 md:px-16 py-8">
            <Suspense fallback={<>Loading...</>}>{children}</Suspense>
          </div>
        </div>
      </body>
    </html>
  );
}
