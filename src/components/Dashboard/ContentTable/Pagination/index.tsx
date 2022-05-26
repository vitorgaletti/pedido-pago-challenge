import { Employee } from '../../../../pages';
import { Button, Flex, Select, Stack, Text } from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface PaginationProps {
  employees: Employee[];
  quantityPerPage: number;
  onShowQuantityPerPage: (quantity: number) => void;
  currentPage: number;
  onHandlePage: (currentPage: number) => void;
}

export function Pagination({
  employees,
  quantityPerPage,
  onShowQuantityPerPage,
  currentPage,
  onHandlePage
}: PaginationProps) {
  const totalPages = Math.ceil(employees.length / quantityPerPage);

  function showQuantityPerPage(quantity: number) {
    onShowQuantityPerPage(quantity);
    onHandlePage(1);
  }

  function handleNextPage() {
    onHandlePage(currentPage + 1 <= totalPages ? currentPage + 1 : 1);
  }

  function handlePreviousPage() {
    onHandlePage(currentPage >= totalPages ? currentPage - 1 : 1);
  }

  return (
    <Flex marginBottom="3.125rem" justifyContent="space-between">
      <Flex gap="1.5rem" alignItems="center" justifyContent="center">
        <Text
          as="p"
          fontWeight="400"
          fontSize="1rem"
          lineHeight="24px"
          color="var(--neutral-5)"
        >
          Monstrando {quantityPerPage} de {employees.length} Registros
        </Text>

        <Stack spacing={3}>
          <Select
            w="4.875rem"
            border="2px solid var(--neutral-2)"
            borderRadius="8px"
            fontWeight="500"
            fontSize="1rem"
            lineHeight="24px"
            color="var(--neutral-5)"
            onChange={e => showQuantityPerPage(Number(e.target.value))}
          >
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={employees.length}>{employees.length}</option>
          </Select>
        </Stack>
      </Flex>
      <Flex alignItems="center" gap="0.75rem">
        <Button
          w="3rem"
          backgroundColor="var(--white)"
          border="1.4px solid var(--neutral-4)"
          borderRadius="8px 0px 0px 8px"
          padding="0"
          onClick={handlePreviousPage}
          disabled={currentPage === 1 ? true : false}
          _hover={{
            backgroundColor: 'var(--neutral-3)'
          }}
        >
          <HiChevronLeft fontSize="1.5rem" color="var(--neutral-5)" />
        </Button>
        <Text
          fontWeight="600"
          fontSize="1rem"
          lineHeight="24px"
          color="var(--neutral-5)"
        >
          {currentPage} de {totalPages}
        </Text>
        <Button
          w="3rem"
          backgroundColor="var(--white)"
          border="1.4px solid var(--neutral-4)"
          borderRadius="0px 8px 8px 0px"
          padding="0"
          _hover={{
            backgroundColor: 'var(--neutral-3)'
          }}
          onClick={handleNextPage}
          disabled={currentPage + 1 <= totalPages ? false : true}
        >
          <HiChevronRight fontSize="1.5rem" color="var(--neutral-5)" />
        </Button>
      </Flex>
    </Flex>
  );
}
