import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "app/components/Header";
import { Footer } from "app/components/Footer";

const roboto = Roboto({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tools Ruben",
  description: "Herramientas personales de trabajo diario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Header />
        <div className='globalContainer'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
