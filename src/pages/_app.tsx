import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import TagManager from "react-gtm-module";
import { ChakraProvider, Container } from "@chakra-ui/react";

import theme from "@styles/theme";
import dockcodelogo from "@public/img/dockcodeLogo.png";

function DockCode({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_ENV_GTM_ID });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel='shortcut icon' href={dockcodelogo.src} type='image/png' />
      </Head>
      <Container
        maxWidth='100vw'
        width='100vw'
        height='100vh'
        margin={0}
        padding={0}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default DockCode;
