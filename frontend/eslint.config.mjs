import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

// Layered architecture (docs/adr/0001): dependencies only point inward.
// physics ← sim ← scene ← ui ← app
const layer = (files, forbidden, extra = []) => ({
  files,
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          ...forbidden.map((dir) => ({
            group: [`@/${dir}`, `@/${dir}/*`],
            message: `Layer violation: this layer must not import from src/${dir} (see docs/adr/0001).`,
          })),
          ...extra,
        ],
      },
    ],
  },
});

const framework = {
  group: ["react", "react-dom", "next", "next/*", "three", "three/*", "@react-three/*"],
  message: "src/physics must stay pure: no UI or rendering frameworks.",
};

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  layer(["src/physics/**"], ["sim", "scene", "ui", "app", "api"], [framework]),
  layer(["src/sim/**"], ["scene", "ui", "app"]),
  layer(["src/scene/**"], ["ui", "app"]),
  layer(["src/ui/**"], ["scene", "app"]),
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
