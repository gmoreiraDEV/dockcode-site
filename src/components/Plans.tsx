import React, { ReactElement } from "react";
import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import PlanCards from "./PlanCards";

export default function Plans(): ReactElement {
  return (
    <Box p={4}>
      <Heading textTransform="uppercase" textAlign="center" marginTop={4}>
        Deixe que cuidamos de todo processo para você
      </Heading>
      <Text textAlign="center" width="55%" margin="0 auto">
        Temos soluções completas que vão desde marketing para seu aplicativo ou
        sistema, até a implementação, desenvolvimento e upload nas lojas de
        aplicativos mais famosas
      </Text>
      <Stack>
        <PlanCards
          icon="start"
          title="start"
          text="Aqui é o inicio de tudo, onde começamos nossa jornada juntos."
          buttonAddress="/planos/start"
        />
        <PlanCards
          icon="advanced"
          title="advanced"
          text="Nesse plano começamos a dar passos mais largos em buscas de objetivos traçados pela estratégia correta para o seu negócio."
          buttonAddress="/planos/advanced"
        />
        <PlanCards
          icon="premium"
          title="premium"
          text="Esse é o maior plano e  é responsável para fazer usa marca atingir lugares que nunca esteve antes."
          buttonAddress="/planos/premium"
        />
      </Stack>
    </Box>
  );
}
