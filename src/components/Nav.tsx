import React, { ReactElement } from "react";
import { Box, Link } from "@chakra-ui/react";

export default function Nav(): ReactElement {
  return (
    <Box
      mr={4}
      display='flex'
      flex={1}
      justifyContent='space-around'
      alignItems='center'
      flexDirection={["column", "column", "row"]}
      right={0}
      color='brand.gray.100'>
      <Link
        p={2}
        fontWeight='bold'
        textDecoration='none'
        _hover={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        _focus={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        _active={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        href='/'>
        INÍCIO
      </Link>
      <Link
        p={2}
        fontWeight='bold'
        textDecoration='none'
        _hover={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        _focus={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        _active={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        href='/planos'>
        PLANOS
      </Link>
      <Link
        p={2}
        fontWeight='bold'
        textDecoration='none'
        _hover={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        _focus={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        _active={{
          background: "brand.pink.500",
          color: "brand.purple.900",
          borderRadius: "0",
        }}
        href='/contato'>
        CONTATO
      </Link>
    </Box>
  );
}
