import { Td, Tr } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import { RoleProps } from '../../../../pages/role/[id]';

export function TBodyRole({ role }: RoleProps) {
  const groupRules = role.grouprules.map(group => {
    return group;
  });

  return (
    <>
      {groupRules.map((group, index) => (
        <Tr key={index}>
          <Td
            padding="1rem"
            whiteSpace="normal"
            borderBottom="1px solid var(--gray)"
            maxWidth="7.062rem"
            fontWeight="400"
            fontSize="xs"
            lineHeight="17px"
            color="var(--neutral-5)"
          >
            {group.role}
          </Td>

          <Td maxWidth="1.25rem" borderBottom="1px solid var(--gray)">
            <Checkbox
              size="lg"
              colorScheme="primary"
              isChecked={group.permissions.includes('read')}
            />
          </Td>
          <Td maxWidth="1.25rem" borderBottom="1px solid var(--gray)">
            <Checkbox
              size="lg"
              colorScheme="primary"
              isChecked={group.permissions.includes('write')}
            />
          </Td>
          <Td maxWidth="1.25rem" borderBottom="1px solid var(--gray)">
            <Checkbox
              size="lg"
              colorScheme="primary"
              isChecked={group.permissions.includes('delete')}
            />
          </Td>
        </Tr>
      ))}
    </>
  );
}
