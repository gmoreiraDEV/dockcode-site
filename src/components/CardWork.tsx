import React, { ReactElement } from "react";
import { Flex, Heading, Button } from "@chakra-ui/react";
import { MdArrowRightAlt } from "react-icons/md";

interface Props {
  title: string;
}

export default function CardWork({ title }: Props): ReactElement {
  return (
    <Flex>
      <Heading>{title}</Heading>
      <Button
        textTransform='uppercase'
        color='brand.gray.100'
        bgColor='brand.pink.500'
        borderRadius={0}
        fontFamily='Unica One'
        fontSize={["xl", "2xl"]}
        p={4}
        _hover={{
          bgColor: "brand.pink.900",
        }}
        rightIcon={<MdArrowRightAlt />}>
        saiba mais
      </Button>
    </Flex>
  );
}
