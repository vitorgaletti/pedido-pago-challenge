import { Flex } from '@chakra-ui/react';
import { ContentTable } from './ContentTable';
import { SearchFilter } from './SearchFilter';
import { Tab } from './Tab';

import { Employee } from '../../pages/index';
import { Pagination } from '../Pagination';
interface DashboardProps {
  employees: Employee[];
}

export function Dashboard({ employees }: DashboardProps) {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100vh"
      maxW="59.75rem"
      maxH="52.562rem"
      bg="var(--white)"
      boxShadow="0px 4px 8px rgba(165, 171, 179, 0.16)"
      borderRadius="lg"
      alignSelf="center"
      px="1.5rem"
      pt="2.5rem"
      gap="2.5rem"
      _last={{
        gap: '24px'
      }}
    >
      <Tab />
      <SearchFilter />
      <ContentTable employees={employees} />
      <Pagination />
    </Flex>
  );
}
