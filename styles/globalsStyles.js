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
  background-color: ${({ theme }) => theme.whiteLilac};
  width: 100vw;
  height: 100vh;
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
  border: none;
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
  max-width: 136.6rem;
  margin: 0 auto;
  
  @media (max-width: 1336px){
    max-width: 120rem;
  }

  @media (max-width: 1280px){
    max-width: 102.4rem;
  }

  @media (max-width: 1024px){
    max-width: 76.8rem;
  }

  @media (max-width: 768px){
    max-width: 60.8rem;
  }

  @media (max-width: 428px){
    max-width: 35rem;
  }

  @media (max-width: 390px){
    max-width: 31.8rem;
  }
}
`;

export default GlobalStyles;
