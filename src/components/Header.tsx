import React, { ReactElement } from "react";
import Image from "next/image";
import { Flex, Link, Box } from "@chakra-ui/react";

interface Props {}

export default function Header({}: Props): ReactElement {
  return (
    <Flex
      justifyContent='space-between'
      width='100%'
      bg='brand.purple.900'
      p={4}>
      <Box p={4}>
        <Image src='/dockcode-logo.svg' width={50} height={50} alt='DOCKCODE' />
      </Box>
      <Box
        mr={4}
        display='flex'
        flex={1}
        justifyContent='space-around'
        alignItems='center'>
        <Link href='#'>INÍCIO</Link>
        <Link href='#'>CASES</Link>
        <Link href='#'>SOLUÇÕES</Link>
        <Link href='#'>ORÇAMENTO</Link>
        <Link href='#'>CONTATO</Link>
      </Box>
    </Flex>
  );
}
