import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "@styles/theme";

function DockCode({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
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
