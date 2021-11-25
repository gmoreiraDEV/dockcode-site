import React, { ReactElement, useRef } from "react";
import Image from "next/image";
import { chakra, Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

import starsSpace from "@public/starsSpace.png";
import rocket from "@public/rocket.png";

const ChakraImage = chakra(Image);

interface Props {}

export default function HeroBanner({}: Props): ReactElement {
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
      bgSize='cover'
      bgPosition='bottom'
      position='relative'
      overflow='hidden'
      onMouseMove={moveRocket}>
      <Box position='absolute' top={0} left={0} as='div' ref={rocketRef}>
        <ChakraImage src={rocket} width={50} height={50} alt='DOCKCODE' />
      </Box>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        flexDirection='column'
        height='600px'
        p={4}
        marginTop={4}>
        <Flex
          justifyContent='flex-start'
          alignItems='center'
          flexDirection='column'>
          <Heading textTransform='uppercase' textAlign='center'>
            acreditamos na sua idéia desde o início
          </Heading>
          <Text width={"55%"} textAlign='center' margin='0 auto'>
            Desenvolvemos seu aplicativo ou seu sistema do absolutamente zero,
            nossa equipe conta com profissionais experientes, o que nos faz te
            entregar um projeto excelente e com a qualidade que sua empresa
            merece
          </Text>
        </Flex>
        <Button
          textTransform='uppercase'
          bgColor='brand.pink.500'
          borderRadius={0}
          _hover={{
            bgColor: "brand.pink.900",
          }}>
          mentoria gratuita
        </Button>
      </Box>
    </Box>
  );
}
