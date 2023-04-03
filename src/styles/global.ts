import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


  html {
    font-smooth: antialiased;
    font-family: 'Poppins', sans-serif;
  }
  p, h1, h2, h3, h4, h5, a {
    margin: 0;
    text-decoration: none;
    color: black;
  }
`
