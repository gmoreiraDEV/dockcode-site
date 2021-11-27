import React, { ReactElement, useState } from "react";
import { Box, Heading, Grid, Image } from "@chakra-ui/react";

import rebecalima from "@public/img/clients/rebecalima.svg";
import cali from "@public/img/clients/cali.svg";
import esp from "@public/img/clients/esp.svg";
import satech from "@public/img/clients/satech.svg";
import padocadois from "@public/img/clients/padocadois.svg";
import digitalredes from "@public/img/clients/digitalredes.svg";

import rebecalimaColor from "@public/img/clients/colors/rebecalima.svg";
import caliColor from "@public/img/clients/colors/cali.svg";
import espColor from "@public/img/clients/colors/esp.svg";
import satechColor from "@public/img/clients/colors/satech.svg";
import padocadoisColor from "@public/img/clients/colors/padocadois.svg";
import digitalredesColor from "@public/img/clients/colors/digitalredes.svg";

export default function Clients(): ReactElement {
  const [currentSrc, setCurrentSrc] = useState("");
  const onMouseEnter = (e) => {
    let currentSRC = e.target.getAttribute("src");
    let datasrc = e.target.getAttribute("datasrc");
    setCurrentSrc(currentSRC);
    currentSRC &&
      (e.target.setAttribute("src", ""), e.target.setAttribute("src", datasrc));
  };
  const onMouseLeave = (e) => {
    let src = currentSrc;
    src &&
      (e.target.setAttribute("src", ""), e.target.setAttribute("src", src));
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width='100%'
      p={16}
      background='brand.gray.100'>
      <Heading
        textAlign='center'
        textTransform='uppercase'
        color='brand.purple.900'>
        pessoas e clientes que confiaram em nós
      </Heading>
      <Grid templateColumns='repeat(3, 1fr)' gap={12} marginTop={8}>
        <Box
          backgroundImage={`${rebecalima.src}`}
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          width='200px'
          height='100px'
          alt='Rebeca Lima'
          _hover={{
            backgroundImage: `${rebecalimaColor.src}`,
          }}
        />
        <Box
          backgroundImage={`${cali.src}`}
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          width='200px'
          height='100px'
          alt='Cali Engenharia'
          _hover={{
            backgroundImage: `${caliColor.src}`,
          }}
        />
        <Box
          backgroundImage={`${esp.src}`}
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          width='200px'
          height='100px'
          alt='ESP System'
          _hover={{
            backgroundImage: `${espColor.src}`,
          }}
        />
        <Box
          backgroundImage={`${satech.src}`}
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          width='200px'
          height='100px'
          alt='SATECH'
          _hover={{
            backgroundImage: `${satechColor.src}`,
          }}
        />
        <Box
          backgroundImage={`${padocadois.src}`}
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          width='200px'
          height='100px'
          alt='Padoca à Dois'
          _hover={{
            backgroundImage: `${padocadoisColor.src}`,
          }}
        />
        <Box
          backgroundImage={`${digitalredes.src}`}
          backgroundSize='contain'
          backgroundRepeat='no-repeat'
          width='200px'
          height='100px'
          alt='Digital Redes'
          _hover={{
            backgroundImage: `${digitalredesColor.src}`,
          }}
        />
      </Grid>
    </Box>
  );
}
