import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  outdir: "styled-system",
  strictTokens: true,
  strictPropertyValues: true,
  jsxFramework: "react",
  presets: ["@pandacss/preset-base"],
  patterns: {
    extend: {}
  },
  theme: {
    extend: {
      tokens: {
        colors: {},
        fonts: {},
        spacing: {},
        sizes: {},
      },
      breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      }
    }
  },
  utilities: {
    extend: {}
  }
});
