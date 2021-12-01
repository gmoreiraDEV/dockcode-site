import React, { ReactElement } from "react";
import {
  Box,
  Heading,
  Stack,
  Input,
  Select,
  Textarea,
  Button,
  Text,
} from "@chakra-ui/react";
import ScheduleService from "@utils/scheduleService";
import { useForm } from "react-hook-form";

export default function Form(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data): Promise<any> {
    ScheduleService(data);
    console.log("page with form", data);
  }
  return (
    <Box
      background='brand.purple.500'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      p={8}
      id='mentoria'>
      <Heading color='brand.gray.100' margin={4} textTransform='uppercase'>
        deixe seus dados e agende uma mentoria grátis
      </Heading>

      <Stack
        as='form'
        onSubmit={handleSubmit(onSubmit)}
        spacing={3}
        width='70%'>
        <Input
          {...register("name")}
          variant='outline'
          placeholder='Nome:'
          borderWidth='2px'
          borderColor='brand.pink.500'
          borderRadius={0}
          _placeholder={{
            color: "brand.gray.100",
          }}
          _hover={{
            borderColor: "brand.purple.900",
            _placeholder: {
              color: "brand.purple.900",
            },
          }}
          _focus={{
            borderColor: "brand.purple.900",
          }}
        />
        <Input
          {...register("email")}
          variant='outline'
          placeholder='Email:'
          borderWidth='2px'
          borderColor='brand.pink.500'
          borderRadius={0}
          _placeholder={{
            color: "brand.gray.100",
          }}
          _hover={{
            borderColor: "brand.purple.900",
            _placeholder: {
              color: "brand.purple.900",
            },
          }}
          _focus={{
            borderColor: "brand.purple.900",
          }}
        />
        <Input
          {...register("phone")}
          variant='outline'
          placeholder='DDD + Telefone'
          borderWidth='2px'
          borderColor='brand.pink.500'
          borderRadius={0}
          _placeholder={{
            color: "brand.gray.100",
          }}
          _hover={{
            borderColor: "brand.purple.900",
            _placeholder: {
              color: "brand.purple.900",
            },
          }}
          _focus={{
            borderColor: "brand.purple.900",
          }}
        />
        <Input
          {...register("company")}
          variant='outline'
          placeholder='Empresa'
          borderWidth='2px'
          borderColor='brand.pink.500'
          borderRadius={0}
          _placeholder={{
            color: "brand.gray.100",
          }}
          _hover={{
            borderColor: "brand.purple.900",
            _placeholder: {
              color: "brand.purple.900",
            },
          }}
          _focus={{
            borderColor: "brand.purple.900",
          }}
        />
        <Input
          {...register("site")}
          variant='outline'
          placeholder='Site: (Opcional)'
          borderWidth='2px'
          borderColor='brand.pink.500'
          borderRadius={0}
          _placeholder={{
            color: "brand.gray.100",
          }}
          _hover={{
            borderColor: "brand.purple.900",
            _placeholder: {
              color: "brand.purple.900",
            },
          }}
          _focus={{
            borderColor: "brand.purple.900",
          }}
        />
        <Select
          {...register("employees")}
          variant='outline'
          placeholder='Número de funcionários'
          borderWidth='2px'
          borderColor='brand.pink.500'
          borderRadius={0}
          color='brand.gray.100'
          _placeholder={{
            color: "brand.gray.100",
          }}
          _hover={{
            borderColor: "brand.purple.900",
            _placeholder: {
              color: "brand.purple.900",
            },
          }}
          _focus={{
            borderColor: "brand.purple.900",
          }}>
          <option value='Individual'>Individual</option>
          <option value='2-5'>2-5</option>
          <option value='6-10'>6-10</option>
          <option value='11-15'>11-15</option>
          <option value='Mais de 15'>Mais de 15</option>
        </Select>
        <Textarea
          {...register("description")}
          variant='outline'
          placeholder='Conte um pouco sobre a sua empresa e quais seus objetivos: (Opcional)'
          borderWidth='2px'
          borderColor='brand.pink.500'
          borderRadius={0}
          _placeholder={{
            color: "brand.gray.100",
          }}
          _hover={{
            borderColor: "brand.purple.900",
            _placeholder: {
              color: "brand.purple.900",
            },
          }}
          _focus={{
            borderColor: "brand.purple.900",
          }}
        />
        <Button
          type='submit'
          textTransform='uppercase'
          color='brand.gray.100'
          bgColor='brand.pink.500'
          borderRadius={0}
          fontFamily='Unica One'
          fontSize='2xl'
          p={4}
          _hover={{
            bgColor: "brand.pink.900",
          }}>
          mentoria gratuita
        </Button>
        <Text color='brand.gray.100' textAlign='center' fontSize='sm'>
          As consultorias são individuais e agendadas a partir do seu cadastro.
        </Text>
      </Stack>
    </Box>
  );
}
