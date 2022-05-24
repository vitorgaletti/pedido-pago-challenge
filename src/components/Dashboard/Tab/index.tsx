import {
  Tabs,
  TabList,
  TabPanels,
  Tab as TabChakra,
  TabPanel
} from '@chakra-ui/react';

export function Tab() {
  return (
    <Tabs isLazy>
      <TabList
        borderBottom="2px solid var(--gray)"
        gap="4.5rem"
        alignItems="center"
      >
        <TabChakra
          fontWeight="600"
          fontSize="sm"
          color="var(--neutral-3)"
          _selected={{
            fontWeight: '600',
            fontSize: 'sm',
            color: 'var(--neutral-black)',
            borderBottom: '2px solid var(--primary-color)'
          }}
        >
          Colaboradores
        </TabChakra>
        <TabChakra
          fontWeight="600"
          fontSize="sm"
          color="var(--neutral-3)"
          _selected={{
            fontWeight: '600',
            fontSize: 'sm',
            color: 'var(--neutral-black)',
            borderBottom: '2px solid var(--primary-color)'
          }}
        >
          Cargos
        </TabChakra>
      </TabList>
      <TabPanels>
        {/* <TabPanel>1</TabPanel>
        <TabPanel>2</TabPanel> */}
      </TabPanels>
    </Tabs>
  );
}
