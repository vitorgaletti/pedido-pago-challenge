import { Heading } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, TableContainer } from '@chakra-ui/react';
import { Employee } from '../../../pages';
import { TBodyTable } from './TBodyTable';
import { THeadTable } from './THeadTable';

interface ContentTableProps {
  employees: Employee[];
}

export function ContentTable({ employees }: ContentTableProps) {
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
            borderCollapse: 'separate',
            borderSpacing: '0'
          }}
        >
          <Thead>
            <Tr>
              <THeadTable group="Nome completo" />
              <THeadTable group="Departamento" padding={'1rem 1rem 1rem 0'} />
              <THeadTable group="Cargo" padding={'1rem 1rem 1rem 0'} />
              <THeadTable group="Unidade" padding={'1rem 1rem 1rem 0'} />
              <THeadTable group="Status" padding={'1rem 1rem 1rem 0'} />
              <THeadTable group="" padding={'1rem 1rem 1rem 0'} />
            </Tr>
          </Thead>
          <Tbody>
            <TBodyTable employees={employees} />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
