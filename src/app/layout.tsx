import type { Metadata } from "next";
import { config } from "@/config";
import "./globals.css";

export const metadata: Metadata = {
  title: config.seo.title,
  description: config.seo.description,
  viewport: "width=device-width, initial-scale=1",
  keywords: config.seo.keywords.join(", "),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
