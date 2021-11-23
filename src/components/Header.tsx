import React, { ReactElement, useState } from "react";
import { Flex, Spacer } from "@chakra-ui/react";

import Nav from "./Nav";
import Logo from "./Logo";
import NavButton from "./NavButton";

export default function Header(): ReactElement {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuOpen = () => {
    return setMenuOpen(() => !menuOpen);
  };

  return (
    <Flex
      justifyContent='space-between'
      alignItems='center'
      width='100%'
      bg='brand.purple.900'
      p={4}>
      <Logo />
      <Spacer />

      {menuOpen && <Nav />}
      <NavButton handleMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
    </Flex>
  );
}
