import React, { ReactElement, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { chakra, Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

import galaxy from "@public/img/galaxy.png";
import planet from "@public/img/planet.png";
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
      bgImage={`${galaxy.src}`}
      bgSize='cover'
      bgPosition='bottom'
      bgRepeat='no-repeat'
      position='relative'
      overflow='hidden'
      onMouseMove={moveRocket}
      color='brand.gray.100'>
      <Box
        position={"absolute"}
        width={"100vw"}
        height={"100px"}
        bgColor='brand.gray.900'
        bottom={0}
        left={0}
      />
      <Box
        zIndex={0}
        position='absolute'
        top={["200px", "100px", "30px", "0"]}
        as='div'
        ref={rocketRef}>
        <ChakraImage src={planet} width={50} height={50} alt='DOCKCODE' />
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
          <Heading
            textTransform='uppercase'
            fontSize='5xl'
            textAlign='center'
            zIndex={10}>
            acreditamos na sua idéia desde o início
          </Heading>
        </Flex>
        <Flex direction='column'>
          <Text
            width={["95%", "85%", "85%"]}
            textAlign='center'
            fontSize='xl'
            margin='0 auto'
            padding={2}
            zIndex={10}>
            Vamos elevar sua marca a um outro nível utilizando o que há de mais
            atual no digital e no universo de aplicativos. Desenvolvemos e
            modernizamos os produtos da sua empresa com foco em resultados.
          </Text>
          <Text
            width={["95%", "85%", "85%"]}
            textAlign='center'
            fontSize='xl'
            fontWeight='900'
            padding={2}
            margin='0 auto'
            zIndex={10}>
            Solicite sua mentoria grátis e seja bem vindo ao seu novo mundo.
          </Text>
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
        </Flex>
      </Box>
    </Box>
  );
}
