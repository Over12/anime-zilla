import type { Metadata } from "next";
import "@/styles/globals.css";
import { onest } from "@/styles/fonts";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AnimeZilla",
  description: "Tu catalogo de animes y mangas",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${onest.className} bg-background text-text transition-colors duration-300`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
