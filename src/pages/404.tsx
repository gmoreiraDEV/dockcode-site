import React, { ReactElement } from "react";
import Layout from "@components/Layout";
import { Flex, Heading, Text, Button, Divider } from "@chakra-ui/react";

import backHero from "@public/img/backHero.png";
import starsSpace from "@public/img/starsSpace.png";

function Custom404(): ReactElement {
  return (
    <Layout>
      <Flex
        textAlign='center'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        height='650px'
        backgroundImage={backHero.src}
        backgroundPosition='bottom'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'>
        <Heading color='brand.gray.100' fontSize='4xl'>
          Oops!
        </Heading>
        <Text color='brand.gray.100' fontSize='xl'>
          Página não encontrada.
        </Text>
        <Divider
          orientation='horizontal'
          borderWidth='medium'
          borderColor='brand.pink.500'
          width='50%'
        />
        <Text
          bgGradient='linear(to-br, brand.pink.900, brand.pink.500, brand.purple.900)'
          bgClip='text'
          marginTop={-50}
          marginBottom={0}
          fontSize='15em'
          fontWeight='extrabold'>
          404
        </Text>

        <Flex
          justifyContent='space-around'
          alignItems='center'
          flexDirection={["column", "column", "row"]}
          width='50%'
          padding={2}
          margin={8}>
          <Button
            as='a'
            href='#mentoria'
            width={["80%", "80%", "40%"]}
            marginBottom={[2, 2, 0]}
            borderRadius={0}
            background='brand.gray.50'
            color='brand.gray.800'
            fontSize={["md", "xl"]}
            fontFamily='Unica One'
            textTransform='uppercase'
            _hover={{
              background: "brand.gray.900",
              color: "brand.gray.100",
            }}>
            voltar
          </Button>
          <Button
            as='a'
            href='#mentoria'
            width={["80%", "80%", "40%"]}
            marginTop={[2, 2, 0]}
            borderRadius={0}
            background='brand.pink.500'
            color='brand.gray.100'
            fontSize={["md", "xl"]}
            fontFamily='Unica One'
            textTransform='uppercase'
            _hover={{
              background: "brand.pink.900",
            }}>
            mentoria grátis
          </Button>
        </Flex>
      </Flex>
      <Divider
        orientation='horizontal'
        borderWidth='medium'
        borderColor='brand.purple.900'
      />
    </Layout>
  );
}

export default Custom404;
