import React, { ReactElement } from "react";
import { Box, Heading, Grid, Image } from "@chakra-ui/react";

import rebecalima from "@public/img/clients/rebecalima.png";
import cali from "@public/img/clients/cali.png";
import esp from "@public/img/clients/esp.png";
import satech from "@public/img/clients/satech.png";
import padocadois from "@public/img/clients/padocadois.png";
import digitalredes from "@public/img/clients/digitalredes.png";

export default function Clients(): ReactElement {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      marginTop={8}
      marginBottom={8}
    >
      <Heading
        textAlign="center"
        textTransform="uppercase"
        color="brand.purple.900"
      >
        pessoas e clientes que confiaram em nós
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={12} marginTop={8}>
        <Image src={`${rebecalima.src}`} alt="Rebeca Lima" />
        <Image src={`${cali.src}`} alt="Cali Engenharia" />
        <Image src={`${esp.src}`} alt="ESP System" />
        <Image src={`${satech.src}`} alt="SATECH" />
        <Image src={`${padocadois.src}`} alt="Padoca à Dois" />
        <Image src={`${digitalredes.src}`} alt="Digital Redes" />
      </Grid>
    </Box>
  );
}
