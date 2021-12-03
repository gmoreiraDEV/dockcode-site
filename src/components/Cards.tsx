import React, { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import CardWork from "./CardWork";

export default function Cards(): ReactElement {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <CardWork title='SEO' />
      <CardWork title='SEO' />
      <CardWork title='SEO' />
      <CardWork title='SEO' />
    </Flex>
  );
}
