"use client";

import { Canvas } from "@react-three/fiber";

/**
 * Persistent 3D canvas, mounted once in the root layout so it survives route
 * changes. Empty on purpose: nothing physical is drawn until it has a row in
 * docs/traceability.md (REGLA #1).
 */
export function SceneCanvas() {
  return (
    <Canvas
      aria-hidden
      style={{ position: "fixed", inset: 0, zIndex: 0 }}
      gl={{ antialias: true }}
      onCreated={({ gl }) => gl.setClearColor("#07080a")}
    />
  );
}
