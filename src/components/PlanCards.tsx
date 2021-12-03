import React, { ReactElement } from "react";
import { Flex, Heading, Text, Button, Circle, Icon } from "@chakra-ui/react";
import { MdPedalBike, MdDirectionsCar, MdDirectionsBoat } from "react-icons/md";

type Props = {
  text: string;
  buttonAddress: string;
  type: string;
};

export default function PlanCards({
  type = "start",
  text,
  buttonAddress,
}: Props): ReactElement {
  return (
    <>
      {type === "start" && (
        <Flex
          position='relative'
          flexDirection='column'
          justifyContent='space-around'
          alignItems='center'
          bgGradient='linear(to-b, brand.pink.500, brand.purple.500)'
          width='350px'
          minWidth='300px'
          height='250px'
          minHeight='190px'
          p={8}
          margin={8}>
          <Circle
            position='absolute'
            top='-30px'
            size='60px'
            bgGradient={`linear(to-b, brand.pink.500, brand.purple.500)`}>
            <Icon
              as={MdPedalBike}
              width='30px'
              height='30px'
              color='brand.gray.100'
            />
          </Circle>
          <Heading
            textTransform='uppercase'
            textAlign='center'
            color='brand.gray.100'>
            start
          </Heading>
          <Text textAlign='center' color='brand.gray.100' width='90%'>
            {text}
          </Text>
          <Button
            as='a'
            href={buttonAddress}
            width='200px'
            borderRadius={0}
            background='brand.gray.100'
            color='brand.purple.500'
            fontSize='2xl'
            fontFamily='Unica One'
            textTransform='uppercase'
            marginTop={[4, 6, 10]}
            _hover={{
              background: "brand.pink.500",
              color: "brand.gray.100",
            }}>
            saiba mais
          </Button>
        </Flex>
      )}
      {type === "advanced" && (
        <Flex
          position='relative'
          flexDirection='column'
          justifyContent='space-around'
          alignItems='center'
          bgGradient='linear(to-b, brand.purple.900, brand.pink.500)'
          width='350px'
          minWidth='300px'
          height='250px'
          minHeight='190px'
          p={8}
          margin={8}>
          <Circle
            position='absolute'
            top='-30px'
            size='60px'
            bgGradient={`linear(to-b, brand.purple.900, brand.pink.500)`}>
            <Icon
              as={MdDirectionsCar}
              width='30px'
              height='30px'
              color='brand.gray.100'
            />
          </Circle>
          <Heading
            textTransform='uppercase'
            textAlign='center'
            color='brand.gray.100'>
            advanced
          </Heading>
          <Text textAlign='center' color='brand.gray.100' width='90%'>
            {text}
          </Text>
          <Button
            as='a'
            href={buttonAddress}
            width='200px'
            borderRadius={0}
            background='brand.gray.100'
            color='brand.purple.500'
            fontSize='2xl'
            fontFamily='Unica One'
            textTransform='uppercase'
            marginTop={[4, 6, 10]}
            _hover={{
              background: "brand.pink.500",
              color: "brand.gray.100",
            }}>
            saiba mais
          </Button>
        </Flex>
      )}
      {type === "premium" && (
        <Flex
          position='relative'
          flexDirection='column'
          justifyContent='space-around'
          alignItems='center'
          bgGradient='linear(to-b, brand.purple.500, brand.purple.900)'
          width='350px'
          minWidth='300px'
          height='250px'
          minHeight='190px'
          p={8}
          margin={8}>
          <Circle
            position='absolute'
            top='-30px'
            size='60px'
            bgGradient={`linear(to-b, brand.purple.500, brand.purple.900)`}>
            <Icon
              as={MdDirectionsBoat}
              width='30px'
              height='30px'
              color='brand.gray.100'
            />
          </Circle>
          <Heading
            textTransform='uppercase'
            textAlign='center'
            color='brand.gray.100'>
            premium
          </Heading>
          <Text textAlign='center' color='brand.gray.100' width='90%'>
            {text}
          </Text>
          <Button
            as='a'
            href={buttonAddress}
            width='200px'
            borderRadius={0}
            background='brand.gray.100'
            color='brand.purple.500'
            fontSize='2xl'
            fontFamily='Unica One'
            textTransform='uppercase'
            marginTop={[4, 6, 10]}
            _hover={{
              background: "brand.pink.500",
              color: "brand.gray.100",
            }}>
            saiba mais
          </Button>
        </Flex>
      )}
    </>
  );
}
