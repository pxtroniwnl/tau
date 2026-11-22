import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { SceneCanvas } from "@/scene/SceneCanvas";
import "./globals.css";

const inter = Inter({ variable: "--font-ui", subsets: ["latin", "greek"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: "Tau (τ) — a journey to a black hole",
  description:
    "A traceable simulator: how much you age versus Earth when traveling to a real black hole.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-state="normal" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <SceneCanvas />
        {children}
      </body>
    </html>
  );
}
