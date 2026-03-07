import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local Business Directory",
  description: "Discover top-rated local businesses in your community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
