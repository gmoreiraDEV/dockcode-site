import React, { ReactElement } from "react";
import Image from "next/image";
import { chakra, Box } from "@chakra-ui/react";

const ChakraImage = chakra(Image);

import dockcodeLogo from "@public/dockcode-logo.svg";

export default function Logo(): ReactElement {
  return (
    <Box p={4}>
      <ChakraImage src={dockcodeLogo} width={50} height={50} alt='DOCKCODE' />
    </Box>
  );
}
