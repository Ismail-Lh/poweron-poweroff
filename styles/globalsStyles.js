import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.white};
  width: 100vw;
  height: 100vh;
  line-height: 1.6;
  font-weight: 400;
  overflow-x: hidden;
}

a,
button,
svg {
  cursor: pointer;
}

input,
textarea,
svg {
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
}

ul {
  list-style: none;
}

button {
  background: transparent;
  border: 0;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 3rem;

  @media (max-width: 550px){
    padding: 0 2rem;
  }
}
`;

export default GlobalStyles;
