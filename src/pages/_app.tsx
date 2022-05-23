import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../styles/global';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Global styles={GlobalStyles} />
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
