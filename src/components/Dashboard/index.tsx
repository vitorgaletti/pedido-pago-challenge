import { Flex } from '@chakra-ui/react';
import { ContentTable } from './ContentTable';

import { Tab } from './Tab';

import { Employee } from '../../pages/index';
import { SearchFilter } from './SearchFilter';
import { useState } from 'react';

interface DashboardProps {
  employees: Employee[];
}

export function Dashboard({ employees }: DashboardProps) {
  const [search, setSearch] = useState('');
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      maxW="59.75rem"
      bg="var(--white)"
      boxShadow="0px 4px 8px rgba(165, 171, 179, 0.16)"
      borderRadius="lg"
      alignSelf="center"
      px="1.5rem"
      pt="2.5rem"
      gap="2.5rem"
      marginTop="1.5rem"
    >
      <Tab />
      <SearchFilter search={search} onSearch={setSearch} />
      <ContentTable employees={employees} search={search} />
    </Flex>
  );
}
