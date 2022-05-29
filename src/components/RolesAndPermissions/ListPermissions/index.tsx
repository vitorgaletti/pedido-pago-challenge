import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Text,
  Thead,
  Tr
} from '@chakra-ui/react';
import { RoleProps } from '../../../pages/role/[id]';
import { THeadTable } from '../../Dashboard/THeadTable';
import { TBodyRole } from './TBodyRole';

export function ListPermissions({ role }: RoleProps) {
  return (
    <>
      <Text
        as="h4"
        fontWeight="600"
        fontSize="1rem"
        lineHeight="16px"
        color="var(--neutral-black)"
      >
        Listagem de permissões
      </Text>

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
              <THeadTable group="Cargo" width="31.25rem" />
              <THeadTable group="Ler" />
              <THeadTable group="Editar" />
              <THeadTable group="Excluir" />
            </Tr>
          </Thead>
          <Tbody>
            <TBodyRole role={role} />
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
