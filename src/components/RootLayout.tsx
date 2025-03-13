"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <html lang="en" className={theme}>
      <body>{children}</body>
    </html>
  );
}
