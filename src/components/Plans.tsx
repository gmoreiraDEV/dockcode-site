import React, { ReactElement } from "react";
import { Box, Heading, Text, Stack, Flex, Circle } from "@chakra-ui/react";
import PlanCards from "./PlanCards";
import Carousel from "react-elastic-carousel";

export default function Plans(): ReactElement {
  return (
    <Box background='white' p={8}>
      <Heading
        textTransform='uppercase'
        textAlign='center'
        marginTop={4}
        color='brand.purple.900'>
        Deixe que cuidamos de todo processo para você
      </Heading>
      <Text
        textAlign='center'
        width='55%'
        margin='0 auto'
        color='brand.purple.900'>
        Temos soluções completas que vão desde marketing para seu aplicativo ou
        sistema, até a implementação, desenvolvimento e upload nas lojas de
        aplicativos mais famosas
      </Text>
      <Stack
        display='flex'
        justifyContent='center'
        alignItems='center'
        padding={8}>
        <Carousel
          itemsToShow={1}
          isRTL={false}
          showArrows={false}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <Flex
                width='150px'
                justifyContent='space-between'
                flexDirection='row'
                margin={4}>
                {pages.map((page) => {
                  const isActivePage = activePage === page;
                  return (
                    <Circle
                      background={
                        isActivePage ? "brand.pink.500" : "brand.purple.900"
                      }
                      size='15px'
                      key={page}
                      onClick={() => onClick(page.toString())}
                    />
                  );
                })}
              </Flex>
            );
          }}>
          <PlanCards
            type='start'
            text='Aqui é o inicio de tudo, onde começamos nossa jornada juntos.'
            buttonAddress='/planos'
          />
          <PlanCards
            type='advanced'
            text='Nesse plano começamos a dar passos mais largos em buscas de objetivos traçados pela estratégia correta para o seu negócio.'
            buttonAddress='/planos'
          />
          <PlanCards
            type='premium'
            text='Esse é o maior plano e  é responsável para fazer usa marca atingir lugares que nunca esteve antes.'
            buttonAddress='/planos'
          />
        </Carousel>
      </Stack>
    </Box>
  );
}
