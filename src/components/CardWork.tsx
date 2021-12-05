import React, { ReactElement } from "react";
import { Flex, Heading, Image, Button } from "@chakra-ui/react";
import { MdArrowRightAlt } from "react-icons/md";

interface Props {
  title: string;
  imageURL: string;
}

export default function CardWork({ title, imageURL }: Props): ReactElement {
  return (
    <Flex
      padding={4}
      width='200px'
      borderColor='brand.purple.500'
      borderWidth='3px'
      flexDirection='column'>
      <Heading>{title}</Heading>
      <Image src={imageURL} alt={title} />
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
