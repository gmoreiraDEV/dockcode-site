import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const Works = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      p={8}
      background='brand.gray.100'
      color='brand.purple.900'
      textAlign='center'>
      <Heading textTransform='uppercase'>o que nós fazemos?</Heading>
      <Text width='55%'>
        Criamos soluções sob medida, analisando seu modelo de negócio e
        melhorando seu produto atual, ou até mesmo criando ele do absoluto zero
      </Text>
    </Box>
  );
};
