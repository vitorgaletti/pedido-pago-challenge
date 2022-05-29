import { useState } from 'react';
import { Heading, useMediaQuery } from '@chakra-ui/react';
import { Table, Thead, Tbody, Tr, TableContainer } from '@chakra-ui/react';
import { Employee } from '../../../pages';
import { Pagination } from './Pagination';

import { THeadTable } from '../THeadTable';
import { TBodyEmployees } from './TBodyEmployees';
import { CardEmployees } from './CardEmployees';

interface ContentTableProps {
  employees?: Employee[];
  search: string;
}

export function ListEmployees({ employees, search }: ContentTableProps) {
  const [quantityPerPage, setQuantityPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile] = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Heading
        as="h3"
        fontWeight="600"
        fontSize="1rem"
        lineHeight="1rem"
        color="var(--neutral-black)"
      >
        Listagem de colaboradores
      </Heading>
      {!isMobile ? (
        <>
          <TableContainer width="100%" maxWidth="56.375rem" h="100%">
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
                  <THeadTable
                    group="Departamento"
                    padding={'1rem 1rem 1rem 0'}
                  />
                  <THeadTable group="Cargo" padding={'1rem 1rem 1rem 0'} />
                  <THeadTable group="Unidade" padding={'1rem 1rem 1rem 0'} />
                  <THeadTable group="Status" padding={'1rem 1rem 1rem 0'} />
                  <THeadTable group="" padding={'1rem 1rem 1rem 0'} />
                </Tr>
              </Thead>
              <Tbody>
                <TBodyEmployees
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
      ) : (
        <>
          <CardEmployees employees={employees} search={search} />
        </>
      )}
    </>
  );
}
