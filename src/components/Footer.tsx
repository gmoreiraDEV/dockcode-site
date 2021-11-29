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
      <Text
        display='flex'
        justifyContent='center'
        alignItems='center'
        // width='35%'
        textAlign='left'
        textTransform='uppercase'
        fontSize='4xl'
        fontFamily='Unica One'>
        {year} <Icon as={MdCopyright} /> todos os direitos reservados
      </Text>
      <Image src={dockcodeLogo.src} alt='DOCKCODE' width='25%' />
    </Box>
  );
}