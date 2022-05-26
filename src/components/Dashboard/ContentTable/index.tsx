import { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, TableContainer } from '@chakra-ui/react';
import { Employee } from '../../../pages';
import { Pagination } from './Pagination';

import { TBodyTable } from './TBodyTable';
import { THeadTable } from './THeadTable';

interface ContentTableProps {
  employees: Employee[];
  search: string;
}

export function ContentTable({ employees, search }: ContentTableProps) {
  const [quantityPerPage, setQuantityPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
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
            <TBodyTable
              employees={employees}
              quantityPerPage={quantityPerPage}
              currentPage={currentPage}
              search={search}
              onHandlePage={setCurrentPage}
            />
          </Tbody>
        </Table>
      </TableContainer>
      <Pagination
        employees={employees}
        quantityPerPage={quantityPerPage}
        onShowQuantityPerPage={setQuantityPerPage}
        currentPage={currentPage}
        onHandlePage={setCurrentPage}
      />
    </>
  );
}
