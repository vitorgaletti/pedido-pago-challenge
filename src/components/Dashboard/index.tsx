import { Flex } from '@chakra-ui/react';
import { ContentTable } from './ContentTable';
import { SearchFilter } from './SearchFilter';
import { Tab } from './Tab';

export function Dashboard() {
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      maxW="59.75rem"
      maxH="52.562rem"
      bg="var(--white)"
      boxShadow="0px 4px 8px rgba(165, 171, 179, 0.16)"
      borderRadius="lg"
      alignSelf="center"
      px="1.5rem"
      py="2.5rem"
      gap="2.5rem"
    >
      <Tab />
      <SearchFilter />
      <ContentTable />
    </Flex>
  );
}
