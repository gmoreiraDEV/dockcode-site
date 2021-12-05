import React, { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";
import CardWork from "./CardWork";

import rocket from "@public/img/rocket.png";

export default function Cards(): ReactElement {
  return (
    <Flex justifyContent='space-between' alignItems='center' width='90%'>
      <CardWork title='SEO' imageURL={rocket.src} />
      <CardWork title='SEO' imageURL={rocket.src} />
      <CardWork title='SEO' imageURL={rocket.src} />
      <CardWork title='SEO' imageURL={rocket.src} />
    </Flex>
  );
}
