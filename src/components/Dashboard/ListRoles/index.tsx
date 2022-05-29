import {
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Text,
  Thead,
  Tr,
  useMediaQuery
} from '@chakra-ui/react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { Role } from '../../../pages/roles';
import { THeadTable } from '../THeadTable';
import { CardRoles } from './CardRoles';
import { TBodyRoles } from './TBodyRoles';

interface ListRolesProps {
  roles?: Role[];
  search: string;
}

export function ListRoles({ roles, search }: ListRolesProps) {
  const [isMobile] = useMediaQuery('(max-width: 767px)');
  return (
    <>
      <Heading
        as="h3"
        fontWeight="600"
        fontSize="1rem"
        lineHeight="16px"
        color="var(--neutral-black)"
      >
        Listagem de cargos
      </Heading>
      {!isMobile ? (
        <>
          <TableContainer width="100%" maxWidth="56.375rem">
            <Table
              width="100%"
              variant="unstyled"
              style={{
                borderCollapse: 'separate',
                borderSpacing: '0'
              }}
            >
              <Thead>
                <Tr>
                  <THeadTable group="Cargo" />
                  <THeadTable group="Departamento" />
                  <THeadTable group="Colaboradores" />
                  <THeadTable group="" />
                </Tr>
              </Thead>
              <Tbody>
                <TBodyRoles roles={roles} search={search} />
              </Tbody>
            </Table>
          </TableContainer>
          <Flex w="100%" justifyContent="flex-end" marginBottom="3.125rem">
            <Flex alignItems="center" gap="0.75rem">
              <Button
                w="3rem"
                backgroundColor="var(--white)"
                border="1.4px solid var(--gray)"
                borderRadius="8px 0px 0px 8px"
                padding="0"
                disabled
                _hover={{
                  backgroundColor: 'var(--neutral-3)'
                }}
              >
                <HiChevronLeft fontSize="1.5rem" color="var(--neutral-2)" />
              </Button>
              <Text
                fontWeight="600"
                fontSize="1rem"
                lineHeight="24px"
                opacity="0.5"
                color="var(--neutral-5)"
              >
                1 de 10
              </Text>
              <Button
                w="3rem"
                backgroundColor="var(--white)"
                border="1.4px solid var(--neutral-2)"
                borderRadius="0px 8px 8px 0px"
                padding="0"
                _hover={{
                  backgroundColor: 'var(--neutral-3)'
                }}
                disabled
              >
                <HiChevronRight fontSize="1.5rem" color="var(--neutral-3)" />
              </Button>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <CardRoles roles={roles} search={search} />
        </>
      )}
    </>
  );
}
