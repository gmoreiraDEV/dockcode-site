import React from "react";
import { useRouter } from "next/router";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import PushToMentoring from "@utils/pushToMentoring";

interface Props {}

export const Schedule = (props: Props) => {
  const router = useRouter();

  async function handlePush() {
    await PushToMentoring(router);
  }
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
        onClick={handlePush}
        width={["90%", "90%", "50%"]}
        borderRadius={0}
        background='brand.pink.500'
        color='brand.gray.100'
        fontSize={["xl", "2xl"]}
        fontFamily='Unica One'
        textTransform='uppercase'
        _hover={{
          background: "brand.pink.900",
        }}>
        receber mentoria gratuita
      </Button>
    </Box>
  );
};
