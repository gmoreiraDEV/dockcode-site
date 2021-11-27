import React, { ReactElement } from "react";
import { Flex, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { MdPedalBike, MdDirectionsCar, MdDirectionsBoat } from "react-icons/md";

interface Props {
  title: string;
  text: string;
  buttonAddress: string;
  icon: string;
}

export default function PlanCards({
  icon,
  title,
  text,
  buttonAddress,
}: Props): ReactElement {
  return (
    <Flex
      position="relative"
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      bgGradient="linear(to-b, brand.pink.500, brand.purple.500)"
      width="350px"
      minWidth="150px"
      height="250px"
      minHeight="190px"
      p={8}
    >
      <Icon
        position="absolute"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="brand.gray.100"
        top={-3}
        p={1}
        width="40px"
        height="40px"
        borderRadius="20px"
        bgGradient="linear(to-b, brand.pink.500, brand.purple.500)"
      >
        {icon === "start" && <MdPedalBike />}
        {icon === "advanced" && <MdDirectionsCar />}
        {icon === "premium" && <MdDirectionsBoat />}
      </Icon>
      <Heading textTransform="uppercase" textAlign="center">
        {title}
      </Heading>
      <Text textAlign="center">{text}</Text>
      <Button as="a" href={buttonAddress}>
        saiba mais
      </Button>
    </Flex>
  );
}
