import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

// WCAG 2.x relative luminance and contrast ratio.
const channel = (c: number) => {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const luminance = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};
const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const css = readFileSync(new URL("./tokens.css", import.meta.url), "utf8");
const token = (name: string) => {
  const match = css.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "i"));
  if (!match) throw new Error(`token --${name} not found`);
  return match[1];
};

describe("design tokens", () => {
  it("contrast formula matches WCAG reference (white on black = 21)", () => {
    expect(contrast("#ffffff", "#000000")).toBeCloseTo(21, 5);
  });

  it.each(["ink", "ink-muted", "accent", "alert"])(
    "--%s on --void meets WCAG AA (4.5:1)",
    (name) => {
      expect(contrast(token(name), token("void"))).toBeGreaterThanOrEqual(4.5);
    },
  );
});
