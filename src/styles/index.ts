import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#FFF',
      black: '#212121',
      primary: '#5E5ADB',
      lightGray: '#f5f5f5',
      darkGray: '#555c68',
      red: '#cf0909'
    },

    fontSizes: {
      xl: '40px',
      lg: '28px',
      md: '16px',
      small: '14px',
    }
  }
})
