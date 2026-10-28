import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "DietGPT — Plan de comida y entreno",
  description:
    "Siete datos y listo: un plan de alimentación por comidas y una rutina por cada día que entrenas, generado con IA.",
};

export const viewport: Viewport = {
  themeColor: "#e8e1d5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${instrument.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
