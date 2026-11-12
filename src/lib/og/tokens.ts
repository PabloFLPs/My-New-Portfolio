/**
 * The design tokens the share images need, as hex values: the image renderer can't read CSS variables. A test
 * keeps every value equal to the same token in `src/app/globals.css`.
 */
export const ogColors = {
  canvas: "#181719",
  line: "#2a282b",
  ink: "#ece8e2",
  muted: "#a39d95",
  faint: "#7d776f",
  accent: "#8c7d6b",
  "accent-soft": "#b8aa96",
} as const;
