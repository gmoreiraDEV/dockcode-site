import React, { ReactElement } from "react";
import { Box, Text, Icon, Image } from "@chakra-ui/react";

import { MdCopyright } from "react-icons/md";

import dockcodeLogo from "@public/img/dockcodeLogoFull.svg";

const year = new Date().getFullYear();

export default function Footer(): ReactElement {
  return (
    <Box
      display='flex'
      justifyContent='space-around'
      alignItems='center'
      flexDirection='row'
      p={8}
      background='brand.gray.100'
      color='brand.purple.900'
      textAlign='center'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection={["column", "column", "row"]}
        textAlign={["center", "center", "left"]}
        textTransform='uppercase'
        fontSize={["sm", "2xl", "3xl"]}
        fontFamily='Unica One'>
        <Text
          display='flex'
          justifyContent='center'
          alignItems='center'
          fontWeight='bold'>
          {year} <Icon as={MdCopyright} />
        </Text>
        <Text>todos os direitos reservados</Text>
      </Box>
      <Image src={dockcodeLogo.src} alt='DOCKCODE' width='25%' />
    </Box>
  );
}
