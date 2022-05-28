import { Flex } from '@chakra-ui/react';
import { ListEmployees } from './ListEmployees';

import { Tab } from './Tab';

import { Employee } from '../../pages/index';
import { SearchFilter } from './SearchFilter';
import { useEffect, useState } from 'react';
import { ListRoles } from './ListRoles';

import { useRouter } from 'next/router';
import Loading from '../Loading';
import { Role } from '../../pages/roles';

interface DashboardProps {
  roles?: Role[];
  employees?: Employee[];
  selectTab?: string;
  setSelectTab?: (e: React.SyntheticEvent) => void;
}

export function Dashboard({ employees, roles }: DashboardProps) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [selectTab, setSelectTab] = useState('Colaboradores');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (router.asPath === '/') {
      setSelectTab('Colaboradores');
    } else if (router.asPath === '/roles') {
      setSelectTab('Cargos');
    }
  }, [router.asPath, selectTab]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000 * 1); // 1 second
  }, [selectTab]);

  const isEmployees = selectTab === 'Colaboradores';

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
      _last={{
        gap: '1.5rem'
      }}
    >
      <Tab onHandleTabSelect={setSelectTab} selectTab={selectTab} />
      <SearchFilter
        search={search}
        onSearch={setSearch}
        selectTab={selectTab}
      />
      {isLoading && <Loading />}
      {!isLoading && isEmployees ? (
        <ListEmployees employees={employees} search={search} />
      ) : (
        <ListRoles roles={roles} search={search} />
      )}
    </Flex>
  );
}
