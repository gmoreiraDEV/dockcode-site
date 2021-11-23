import React, { ReactElement } from "react";
import Image from "next/image";
import { chakra, Box } from "@chakra-ui/react";

import dockcodeLogo from "@public/dockcode-logo.svg";

const ChakraNextImage = chakra(Image);

export default function Logo(): ReactElement {
  return (
    <Box p={4}>
      <ChakraNextImage
        src={dockcodeLogo}
        width={50}
        height={50}
        alt='DOCKCODE'
      />
    </Box>
  );
}
