import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

interface Props {}

export const Schedule = (props: Props) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      p={8}
      background='brand.purple.900'
      color='brand.gray.100'
      textAlign='center'>
      <Heading textTransform='uppercase'>agende sua mentoria</Heading>
      <Text width='55%' marginBottom={8}>
        Converse com nossos especialistas e descubra tudo o é necessário para
        ter negócio alcançando todos os seus potenciais clientes
      </Text>
      <Button
        as='a'
        href='#mentoria'
        width='600px'
        borderRadius={0}
        background='brand.pink.500'
        color='brand.gray.100'
        fontSize='2xl'
        fontFamily='Unica One'
        textTransform='uppercase'>
        receber mentoria gratuita
      </Button>
    </Box>
  );
};
