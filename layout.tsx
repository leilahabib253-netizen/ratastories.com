import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RataStories | اكتب قصتك بالذكاء الاصطناعي",
  description:
    "منصة عربية لكتابة القصص بالذكاء الاصطناعي، وتحويلها إلى قصص إلكترونية، ونشرها، وتحقيق دخل إضافي من خلال الاشتراك.",
  keywords: "كتابة قصص, ذكاء اصطناعي, قصص عربية, RataStories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}