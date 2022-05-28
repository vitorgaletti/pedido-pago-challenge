import { Flex, Td, Text, Tr } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Role } from '../../../../pages/roles';
import { PopoverActions } from '../../PopoverActions';

interface TBodyRolesProps {
  roles?: Role[];
  search: string;
}

export function TBodyRoles({ roles, search }: TBodyRolesProps) {
  const filteredRoles = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase();

    return roles?.filter(role =>
      role.name.toLowerCase().includes(lowerCaseSearch)
    );
  }, [search, roles]);
  return (
    <>
      {roles &&
        filteredRoles?.map((role, index) => (
          <Tr key={index}>
            <Td
              padding="1rem"
              whiteSpace="normal"
              borderBottom="1px solid var(--gray)"
              maxWidth="7.062rem"
              fontWeight="500"
              fontSize="xs"
              color="var(--neutral-5)"
              lineHeight="17px"
            >
              {role.name}
            </Td>
            <Td
              padding="1rem"
              whiteSpace="normal"
              borderBottom="1px solid var(--gray)"
              maxWidth="7.062rem"
              fontWeight="500"
              fontSize="xs"
              color="var(--neutral-5)"
              lineHeight="17px"
            >
              {role.departament}
            </Td>
            <Td
              padding="1rem"
              whiteSpace="normal"
              borderBottom="1px solid var(--gray)"
              maxWidth="7.062rem"
              fontWeight="500"
              fontSize="xs"
              color="var(--neutral-5)"
              lineHeight="17px"
            >
              {role.agents_quantity}
            </Td>
            <Td paddingRight="1rem" borderBottom="1px solid var(--gray)">
              <Flex justifyContent="flex-end">
                <PopoverActions />
              </Flex>
            </Td>
          </Tr>
        ))}
      {filteredRoles?.length === 0 && (
        <Tr>
          <Td
            fontWeight="600"
            fontSize="sm"
            color="var(--neutral-5)"
            lineHeight="17px"
          >
            Cargo não encontrado
          </Td>
        </Tr>
      )}
    </>
  );
}
