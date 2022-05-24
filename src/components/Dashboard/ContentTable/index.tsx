import { Heading, textDecoration } from '@chakra-ui/react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';
import { ThTable } from './ThTable';

export function ContentTable() {
  return (
    <>
      <Heading
        as="h3"
        fontWeight="600"
        fontSize="1rem"
        color="var(--neutral-black)"
      >
        Listagem de colaboradores
      </Heading>
      <TableContainer width="100%" maxWidth="56.375rem">
        <Table
          width="100%"
          variant="unstyled"
          style={{
            borderCollapse: 'collapse',
            borderSpacing: '0'
          }}
        >
          <Thead>
            <Tr
              style={{
                border: '1px solid #CAD6D1'
              }}
            >
              <ThTable group="Nome Completo" />
              <ThTable group="Departamento" />
              <ThTable group="Cargo" />
              <ThTable group="Unidade" />
              <ThTable group="Status" />
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
              <Td>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
              <Td>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
              <Td>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
