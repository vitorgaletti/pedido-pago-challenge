import {
  Tabs,
  TabList,
  Tab as TabChakra,
  useMediaQuery,
  Flex,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';
import { PopoverActions } from '../PopoverActions';

interface TabProps {
  selectTab: string;
  onHandleTabSelect: (e: any) => void;
}

export function Tab({ selectTab, onHandleTabSelect }: TabProps) {
  const [isMobile] = useMediaQuery('(max-width: 767px)');

  function handleTabSelect(e: React.SyntheticEvent) {
    onHandleTabSelect(e.currentTarget.textContent);
  }

  return (
    <>
      {!isMobile ? (
        <Tabs index={selectTab === 'Colaboradores' ? 0 : 1} isLazy>
          <TabList
            borderBottom="2px solid var(--gray)"
            gap="4.5rem"
            alignItems="center"
          >
            <Link href="/">
              <a>
                <TabChakra
                  fontWeight="600"
                  fontSize="sm"
                  color="var(--neutral-3)"
                  onClick={e => handleTabSelect(e)}
                  _selected={{
                    fontWeight: '600',
                    fontSize: 'sm',
                    color: 'var(--neutral-black)',
                    borderBottom: '2px solid var(--primary-color)'
                  }}
                >
                  Colaboradores
                </TabChakra>
              </a>
            </Link>
            <Link href="/roles">
              <a>
                <TabChakra
                  fontWeight="600"
                  fontSize="sm"
                  color="var(--neutral-3)"
                  onClick={e => handleTabSelect(e)}
                  _selected={{
                    fontWeight: '600',
                    fontSize: 'sm',
                    color: 'var(--neutral-black)',
                    borderBottom: '2px solid var(--primary-color)'
                  }}
                >
                  Cargos
                </TabChakra>
              </a>
            </Link>
          </TabList>
        </Tabs>
      ) : (
        <>
          <Flex
            w="100%"
            border="2px solid var(--neutral-2)"
            borderRadius="8px"
            py="0.5rem"
            px="1.25rem"
            mt="1rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              as="p"
              fontSize="1rem"
              lineHeight="24px"
              color="var(--neutral-5)"
            >
              {selectTab}
            </Text>

            <PopoverActions isEmployees />
          </Flex>
        </>
      )}
    </>
  );
}
