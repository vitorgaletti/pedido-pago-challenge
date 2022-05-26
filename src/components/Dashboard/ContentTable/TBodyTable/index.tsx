import { Avatar, Button, Flex, Td, Text, Tr } from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';
import { Employee } from '../../../../pages';

interface TBodyTableProps {
  employees: Employee[];
}

export function TBodyTable({ employees }: TBodyTableProps) {
  return (
    <>
      {employees &&
        employees.map(employee => (
          <Tr key={employee.agent_id}>
            <Td
              padding="1rem"
              whiteSpace="normal"
              borderBottom="1px solid var(--gray)"
              opacity={employee.status === 'inactive' ? '0.3' : '1'}
            >
              <Flex alignItems="center" gap="0.5rem">
                <Avatar size="sm" src={employee.image} borderRadius="5rem" />
                <Text
                  maxWidth="7.062rem"
                  as="p"
                  fontWeight="600"
                  fontSize="xs"
                  color="var(--neutral-5)"
                  lineHeight="17px"
                  opacity={employee.status === 'inactive' ? '0.3' : '1'}
                >
                  {employee.name}
                </Text>
              </Flex>
            </Td>
            <Td
              padding="1rem 1rem 1rem 0"
              fontWeight="400"
              fontSize="xs"
              color="var(--neutral-5)"
              lineHeight="17px"
              borderBottom="1px solid var(--gray)"
              opacity={employee.status === 'inactive' ? '0.3' : '1'}
            >
              {employee.department}
            </Td>
            <Td
              padding="1rem 1rem 1rem 0"
              fontWeight="400"
              fontSize="xs"
              color="var(--neutral-5)"
              lineHeight="17px"
              borderBottom="1px solid var(--gray)"
              opacity={employee.status === 'inactive' ? '0.3' : '1'}
            >
              {employee.role}
            </Td>
            <Td
              padding="1rem 1rem 1rem 0"
              fontWeight="400"
              fontSize="xs"
              color="var(--neutral-5)"
              lineHeight="17px"
              borderBottom="1px solid var(--gray)"
              opacity={employee.status === 'inactive' ? '0.3' : '1'}
            >
              {employee.branch}
            </Td>
            <Td padding="1rem 1rem 1rem 0" borderBottom="1px solid var(--gray)">
              <Flex
                w="100%"
                maxWidth="4.5rem"
                h="1.5rem"
                backgroundColor={
                  employee.status === 'active'
                    ? 'var(--feedback-success)'
                    : 'var(--gray)'
                }
                borderRadius="5rem"
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  as="p"
                  fontWeight="600"
                  fontSize="sm"
                  lineHeight="16px"
                  color="var(--neutral-black)"
                  textAlign="center"
                >
                  {employee.status === 'active' ? 'Ativo' : 'Inativo'}
                </Text>
              </Flex>
            </Td>

            <Td paddingRight="1rem" borderBottom="1px solid var(--gray)">
              <Flex justifyContent="flex-end">
                <Button
                  padding="0"
                  backgroundColor="transparent"
                  _hover={{
                    backgroundColor: 'transparent'
                  }}
                >
                  <FiMoreVertical fontSize="1.5rem" color="var(--neutral-5)" />
                </Button>
              </Flex>
            </Td>
          </Tr>
        ))}
    </>
  );
}
