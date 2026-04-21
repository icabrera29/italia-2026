import type { Metadata } from "next";
import { Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "L'Italia Curata - Nuestro Viaje Italiano",
  description: "Un viaje seleccionado a través del corazón del Mediterráneo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${notoSerif.variable} antialiased light`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body 
        className="min-h-full flex flex-col selection:bg-primary-container selection:text-on-primary-container"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
