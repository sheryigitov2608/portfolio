import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheryigitov Lazizbek",
  description: "Frontend Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" translate="no">
      <head>
        <meta name="google" content="notranslate" />
      </head>
      <body>{children}</body>
    </html>
  );
}
