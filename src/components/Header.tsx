import React, { ReactElement, useState } from "react";
import { Flex, Spacer, Button } from "@chakra-ui/react";

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
      flexDirection={["column", "column", "row"]}
      width='100%'
      bg='brand.purple.900'
      padding={4}>
      <Logo />
      <Spacer />
      <Flex flexDirection={["column-reverse", "column-reverse", "row"]}>
        {menuOpen && <Nav />}

        <NavButton handleMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
      </Flex>
    </Flex>
  );
}
