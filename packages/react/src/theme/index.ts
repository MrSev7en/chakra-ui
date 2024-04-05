import { defineConfig } from "../styled-system"

export const defaultThemeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "chakra",
  cssVarsRoot: ":root",
  globalCss: {},
  theme: {
    breakpoints: {},
    keyframes: {},
    tokens: {
      animations: {},
      blurs: {},
      borders: {},
      colors: {},
      durations: {},
      easings: {},
      fonts: {},
      fontSizes: {},
      fontWeights: {},
      letterSpacings: {},
      lineHeights: {},
      radii: {},
      spacing: {},
      sizes: {},
      zIndex: {},
    },
    semanticTokens: {
      colors: {},
      shadows: {},
    },
    recipes: {},
    slotRecipes: {},
    textStyles: {},
  },
})
