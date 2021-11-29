import React, { ReactElement } from "react";
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children?: ReactElement[];
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <Box w='100%' height='100%'>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
