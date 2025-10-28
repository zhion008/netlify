import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proclaimers AI - Transform Your Ministry with AI-Powered Sermon Development",
  description: "Craft powerful, theologically rich sermons with Proclaimers AI. Combining Black preaching excellence with cutting-edge technology for pastors, students, and ministry leaders.",
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
