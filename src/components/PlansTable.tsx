import React, { ReactElement } from "react";
import {
  Flex,
  Box,
  Icon,
  Heading,
  Badge,
  Tooltip,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
} from "@chakra-ui/react";
import {
  MdPedalBike,
  MdDirectionsCar,
  MdDirectionsBoat,
  MdCheck,
  MdClose,
} from "react-icons/md";

export default function PlansTable(): ReactElement {
  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      padding={4}>
      <Table variant='striped' colorScheme='brand.gray'>
        <TableCaption>Lorem...</TableCaption>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'>
                <Icon as={MdPedalBike} />
                <Heading as='h2'>start</Heading>
              </Box>
            </Th>
            <Th>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'>
                <Icon as={MdDirectionsCar} />
                <Heading as='h2'>advanced</Heading>
              </Box>
            </Th>
            <Th>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'>
                <Icon as={MdDirectionsBoat} />
                <Heading as='h2'>premium</Heading>
              </Box>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Tooltip
              label='Gestão e otimização com alocação semanal'
              fontFamily='Unica One'
              fontSize='md'>
              <Td textAlign='center' fontFamily='Unica One'>
                Planos de Gestão
              </Td>
            </Tooltip>
            <Td textAlign='center'>4h</Td>
            <Td textAlign='center'>8h</Td>
            <Td textAlign='center'>12h</Td>
          </Tr>
          <Tr>
            <Tooltip
              label='Canais de suporte e atendimento ao cliente'
              fontFamily='Unica One'
              fontSize='md'>
              <Td textAlign='center' fontFamily='Unica One'>
                Canais de atendimento
              </Td>
            </Tooltip>
            <Td textAlign='center'>Ticket de suporte</Td>
            <Td textAlign='center'>Ticket de suporte, Email</Td>
            <Td textAlign='center'>Ticket de suporte, Email, WhatsApp</Td>
          </Tr>
          <Tr>
            <Tooltip
              label='Gestão dos serviços de hospedagem contratados'
              fontFamily='Unica One'
              fontSize='md'>
              <Td textAlign='center' fontFamily='Unica One'>
                Infraestrutura
              </Td>
            </Tooltip>
            <Td textAlign='center'>SIM</Td>
            <Td textAlign='center'>SIM</Td>
            <Td textAlign='center'>SIM</Td>
          </Tr>
          <Tr>
            <Tooltip
              label='Gestão das campanhas e otimização do orçamento'
              fontFamily='Unica One'
              fontSize='md'>
              <Td textAlign='center' fontFamily='Unica One'>
                Google Ads
              </Td>
            </Tooltip>
            <Td textAlign='center'>4 campanhas</Td>
            <Td textAlign='center'>8 campanhas</Td>
            <Td textAlign='center'>12 campanhas</Td>
          </Tr>
          <Tr>
            <Tooltip
              label='Gestão das campanhas e otimização do orçamento'
              fontFamily='Unica One'
              fontSize='md'>
              <Td textAlign='center' fontFamily='Unica One'>
                Facebook Ads
              </Td>
            </Tooltip>
            <Td textAlign='center'>4 campanhas</Td>
            <Td textAlign='center'>8 campanhas</Td>
            <Td textAlign='center'>12 campanhas</Td>
          </Tr>
          <Tr>
            <Tooltip
              label='Gestão das listas, tags, automações e agendamentos'
              fontFamily='Unica One'
              fontSize='md'>
              <Td textAlign='center' fontFamily='Unica One'>
                Email Marketing
              </Td>
            </Tooltip>
            <Td textAlign='center'>1000 leads</Td>
            <Td textAlign='center'>3000 leads</Td>
            <Td textAlign='center'>5000 leads</Td>
          </Tr>
          <Tr>
            <Tooltip
              label='Relatório digital + alinhamento de expectativas e KPIs'
              fontFamily='Unica One'
              fontSize='md'>
              <Td textAlign='center' fontFamily='Unica One'>
                Relatório
              </Td>
            </Tooltip>
            <Td textAlign='center'>SIM</Td>
            <Td textAlign='center'>SIM</Td>
            <Td textAlign='center'>SIM</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th></Th>
            <Th>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                width='100%'>
                <Button>Selecionar</Button>
              </Box>
            </Th>
            <Th>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                width='100%'>
                <Button>Selecionar</Button>
              </Box>
            </Th>
            <Th>
              <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                width='100%'>
                <Button>Selecionar</Button>
              </Box>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </Flex>
  );
}
