import RootLayout from "@/components/RootLayout";
import { ThemeProvider } from "@/context/ThemeContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeff Zhu's Portfolio",
  description: "Jeff Zhu's Portfolio",
  icons: {
    icon: "/profolio.png",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <RootLayout>{children}</RootLayout>
    </ThemeProvider>
  );
}
