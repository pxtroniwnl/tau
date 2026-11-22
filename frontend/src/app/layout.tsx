import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SceneCanvas } from "@/scene/SceneCanvas";
import "./globals.css";

const inter = Inter({ variable: "--font-ui", subsets: ["latin", "greek"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: "Tau (τ) — viaje a un agujero negro",
  description:
    "Simulador trazable: cuánto envejeces tú y cuánto la Tierra al viajar a un agujero negro real.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" data-state="normal" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <SceneCanvas />
        {children}
      </body>
    </html>
  );
}
