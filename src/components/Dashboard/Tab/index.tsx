import {
  Tabs,
  TabList,
  TabPanels,
  Tab as TabChakra,
  TabPanel
} from '@chakra-ui/react';
import Link from 'next/link';

import React from 'react';

interface TabProps {
  selectTab: string;
  onHandleTabSelect: (e: any) => void;
}

export function Tab({ selectTab, onHandleTabSelect }: TabProps) {
  function handleTabSelect(e: React.SyntheticEvent) {
    onHandleTabSelect(e.currentTarget.textContent);
  }

  return (
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
      <TabPanels>
        {/* <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel> */}
      </TabPanels>
    </Tabs>
  );
}
