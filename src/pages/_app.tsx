import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Amplify from "aws-amplify";
import TagManager from "react-gtm-module";
import { ChakraProvider, Container } from "@chakra-ui/react";

import awsconfig from "src/aws-exports";
import theme from "@styles/theme";
import "@styles/base.css";
import dockcodelogo from "@public/img/dockcodeLogo.png";

Amplify.configure(awsconfig);

function DockCode({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_ENV_GTM_ID });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'></meta>
        <link rel='shortcut icon' href={dockcodelogo.src} type='image/png' />
      </Head>
      <Container
        maxWidth='100%'
        width='100%'
        height='100%'
        margin={0}
        padding={0}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default DockCode;
