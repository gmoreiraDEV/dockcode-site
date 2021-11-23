import React, { ReactElement } from "react";
import { IconButton } from "@chakra-ui/react";
import { MdMenu, MdArrowForwardIos } from "react-icons/md";

interface Props {
  menuOpen: boolean;
  handleMenuOpen: VoidFunction;
}

export default function NavButton({
  menuOpen,
  handleMenuOpen,
}: Props): ReactElement {
  return (
    <IconButton
      aria-label='Abrir menu'
      color='brand.pink.500'
      bg='transparent'
      fontSize={24}
      borderRadius={0}
      icon={menuOpen ? <MdArrowForwardIos /> : <MdMenu />}
      onClick={() => handleMenuOpen()}
      _hover={{
        bg: "brand.pink.500",
        color: "brand.purple.900",
      }}
      _focus={{ outline: "none" }}
    />
  );
}
