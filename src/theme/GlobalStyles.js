import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  ${({ theme }) => css`
    body {
      font-size: 1.7rem;
      font-family: 'Roboto', sans-serif;
      background: ${theme.colors.bg};
      color: ${theme.colors.primaryText};
    }
  `}
`
