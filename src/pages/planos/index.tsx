import React, { ReactElement } from "react";
import Head from "next/head";
import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "@components/Layout";
import PlansTable from "@components/PlansTable";

export default function Planos(): ReactElement {
  return (
    <Layout>
      <Head>
        <title>DOCKCODE</title>
      </Head>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        background='brand.gray.50'
        color='brand.gray.900'
        p={8}>
        <Heading textTransform='uppercase'>PLANOS</Heading>
        <Text>
          Além de software house, também gerenciamos suas campanhas de marketing
          para elevar suas vendas.
        </Text>
        <Text>Escolha o plano que melhor se adapata à sua empresa</Text>
        <PlansTable />
      </Box>
    </Layout>
  );
}
