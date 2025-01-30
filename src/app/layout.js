import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navegacion from "./components/Layout/Navegacion";
import Footer from "./components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Extintor Design",
  description: "Created by Raúl Coello",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-row">
          <div>
            <Navegacion />
          </div>
          <div className="flex-1">
            {children} <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
