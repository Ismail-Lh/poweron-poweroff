import { ThemeProvider } from 'styled-components';
import { GlobalStyles, theme } from '@styles';
import { GlobalProvider } from '@contexts/global_context';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default MyApp;
