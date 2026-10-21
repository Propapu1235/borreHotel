import type { Metadata } from "next";
import { Comfortaa, Varela_Round } from "next/font/google";
import "./globals.css";

// 1. Cargamos la fuente para títulos
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["400", "700"],
  display: "swap",
});

// 2. Cargamos la fuente para textos generales
const varelaRound = Varela_Round({
  subsets: ["latin"],
  variable: "--font-varela",
  weight: ["400"],
  display: "swap",
});

// 3. Metadatos de la pestaña del navegador
export const metadata: Metadata = {
  title: "BAGTAUR | Dog Walking & Spa",
  description: "Servicio y atención basado en el cariño, la responsabilidad y el respeto hacia los animales en la ZMG.",
};

// 4. Componente envoltorio principal de la app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${comfortaa.variable} ${varelaRound.variable}`}>
      <body className="font-sans bg-bagtaur-cream text-bagtaur-dark antialiased">
        {children}
      </body>
    </html>
  );
}