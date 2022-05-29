import { Th } from '@chakra-ui/react';

interface THeadTableProps {
  group: string;
  padding?: string;
  width?: string;
}

export function THeadTable({
  group,
  padding = '1rem',
  width = 'auto'
}: THeadTableProps) {
  return (
    <Th
      width={width}
      fontWeight="600"
      fontSize="xs"
      textTransform="capitalize"
      textAlign="left"
      color="var(--neutral-5)"
      borderTop="1px solid var(--neutral-2)"
      borderBottom="1px solid var(--neutral-2)"
      padding={padding}
      _first={{
        borderLeft: '1px solid var(--neutral-2)',
        borderTopLeftRadius: '0.5rem'
      }}
      _last={{
        borderRight: '1px solid var(--neutral-2)',
        borderTopRightRadius: '0.5rem'
      }}
    >
      {group}
    </Th>
  );
}
