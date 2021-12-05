import React, { ReactElement, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { chakra, Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

import starsSpace from "@public/img/starsSpace.png";
import rocket from "@public/img/rocket.png";
import PushToMentoring from "@utils/pushToMentoring";

const ChakraImage = chakra(Image);

export default function HeroBanner(): ReactElement {
  const router = useRouter();
  const rocketRef = useRef(null);

  async function handlePush() {
    await PushToMentoring(router);
  }

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
      onMouseMove={moveRocket}
      color='brand.gray.100'>
      <Box
        zIndex={0}
        position='absolute'
        top={["200px", "100px", "30px", "0"]}
        as='div'
        ref={rocketRef}>
        <ChakraImage src={rocket} width={50} height={50} alt='DOCKCODE' />
      </Box>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        flexDirection='column'
        height={["450px", "550px", "600px"]}
        p={4}
        marginTop={4}>
        <Flex
          justifyContent='flex-start'
          alignItems='center'
          flexDirection='column'>
          <Heading textTransform='uppercase' textAlign='center' zIndex={10}>
            acreditamos na sua idéia desde o início
          </Heading>
          <Text
            width={["95%", "85%", "85%", "55%"]}
            textAlign='center'
            fontWeight='bold'
            margin='0 auto'
            zIndex={10}>
            Seu negócio gerenciado por profissionais. Desenvolvemos e mantemos
            produtos da sua empresa com foco nos resultados. Solicite sua
            mentoria grátis.
          </Text>
        </Flex>
        <Button
          onClick={handlePush}
          textTransform='uppercase'
          bgColor='brand.pink.500'
          borderRadius={0}
          fontFamily='Unica One'
          fontSize='2xl'
          p={8}
          _hover={{
            bgColor: "brand.pink.900",
          }}
          zIndex={10}>
          mentoria gratuita
        </Button>
      </Box>
    </Box>
  );
}
