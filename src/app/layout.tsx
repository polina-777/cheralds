import type { Metadata } from "next";
import { Indie_Flower, Karantina, Montserrat } from "next/font/google";

import { Footer } from "components/Footer";
import { Header } from "components/Header";

import "./global.css";

export const dynamic = "force-dynamic";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--karantina",
});

const indie_flower = Indie_Flower({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--indie_flower",
});

export const metadata: Metadata = {
  title: "Cheralds",
  description: "Welcome to Cheralds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={"en"}
      className={`${montserrat.variable} ${karantina.variable} ${indie_flower.variable} scroll-smooth bg-green_ch-800 text-white antialiased`}
    >
      <body>
        <div className={"flex h-full flex-col"}>
          <Header />
          <main className={"flex-1 pt-[116px]"}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
