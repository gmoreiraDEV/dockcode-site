import React, { ReactElement, useRef } from "react";
import Image from "next/image";
import { chakra, Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

import starsSpace from "@public/img/starsSpace.png";
import rocket from "@public/img/rocket.png";

const ChakraImage = chakra(Image);

export default function HeroBanner(): ReactElement {
  const rocketRef = useRef(null);

  function moveRocket(event): void {
    const speed = 5;
    const x = (window.innerWidth - event.pageX * speed) / 100;
    const y = (window.innerWidth - event.pageY * speed) / 100;

    rocketRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }

  return (
    <Box
      bgImage={`${starsSpace.src}`}
      bgSize="cover"
      bgPosition="bottom"
      position="relative"
      overflow="hidden"
      onMouseMove={moveRocket}
      color="brand.gray.100"
    >
      <Box zIndex={0} position="absolute" as="div" ref={rocketRef}>
        <ChakraImage src={rocket} width={50} height={50} alt="DOCKCODE" />
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        height="600px"
        p={4}
        marginTop={4}
      >
        <Flex
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
        >
          <Heading textTransform="uppercase" textAlign="center" zIndex={10}>
            acreditamos na sua idéia desde o início
          </Heading>
          <Text width={"55%"} textAlign="center" margin="0 auto" zIndex={10}>
            Desenvolvemos seu aplicativo ou seu sistema do absolutamente zero,
            nossa equipe conta com profissionais experientes, o que nos faz te
            entregar um projeto excelente e com a qualidade que sua empresa
            merece
          </Text>
        </Flex>
        <Button
          textTransform="uppercase"
          bgColor="brand.pink.500"
          borderRadius={0}
          fontFamily="Unica One"
          fontSize="2xl"
          p={8}
          _hover={{
            bgColor: "brand.pink.900",
          }}
          zIndex={10}
        >
          mentoria gratuita
        </Button>
      </Box>
    </Box>
  );
}
