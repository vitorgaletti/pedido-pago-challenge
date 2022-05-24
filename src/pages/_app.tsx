import type { AppProps } from 'next/app';

import { Header } from '../components/Header';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import { Global } from '@emotion/react';
import { GlobalStyles } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
