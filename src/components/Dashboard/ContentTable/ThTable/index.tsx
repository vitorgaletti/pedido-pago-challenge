import { Th } from '@chakra-ui/react';

interface ThTableProps {
  group: string;
}

export function ThTable({ group }: ThTableProps) {
  return (
    <Th
      fontWeight="600"
      fontSize="xs"
      color="var(--neutral-5)"
      _first={{
        borderRadius: '10px 0 0 0'
      }}
    >
      {group}
    </Th>
  );
}
