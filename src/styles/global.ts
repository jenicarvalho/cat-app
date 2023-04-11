import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    fontFamily: 'Inter, apple-system, sans-serif',
    backgroundColor: '$lightGray'
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontWeight: 400,
  }
})
