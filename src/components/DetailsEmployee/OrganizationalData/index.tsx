import {
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';
import { AgentProps } from '../../../pages/agent/[id]';

export function OrganizationalData({ agent }: AgentProps) {
  return (
    <Flex
      mt="2.5rem"
      border="2px solid var(--gray)"
      borderRadius="0.5rem"
      padding="1.5rem"
      flexDirection="column"
    >
      <Text
        as="p"
        fontWeight="600"
        fontSize="1.125rem"
        lineHeight="27px"
        color="var(--neutral-black)"
      >
        Dados organizacionais
      </Text>
      <SimpleGrid mt="1.562rem" columns={2} spacing={6}>
        <Flex w="100%" maxWidth="26.125rem" maxHeight="3.5rem">
          <FormControl
            as="fieldset"
            border="2px solid #CAD6D1"
            backgroundColor="#F5FAF8"
            borderRadius="0.5rem"
            padding="0.812rem 1.25rem 1rem"
          >
            <FormLabel
              as="legend"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1px"
              color="var(--neutral-3)"
              px="0.25rem"
            >
              Departamento
            </FormLabel>
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                as="p"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="24px"
                color="var(--neutral-5)"
              >
                {agent.department}
              </Text>
              <FiChevronDown />
            </Flex>
          </FormControl>
        </Flex>

        <Flex w="100%" maxWidth="26.125rem" maxHeight="3.5rem">
          <FormControl
            as="fieldset"
            border="2px solid #CAD6D1"
            backgroundColor="#F5FAF8"
            borderRadius="0.5rem"
            padding="0.812rem 1.25rem 1rem"
          >
            <FormLabel
              as="legend"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1px"
              color="var(--neutral-3)"
              px="0.25rem"
            >
              Cargo
            </FormLabel>
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                as="p"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="24px"
                color="var(--neutral-5)"
              >
                {agent.role}
              </Text>
              <FiChevronDown />
            </Flex>
          </FormControl>
        </Flex>

        <Flex w="100%" maxWidth="26.125rem" maxHeight="3.5rem">
          <FormControl
            as="fieldset"
            border="2px solid #CAD6D1"
            backgroundColor="#F5FAF8"
            borderRadius="0.5rem"
            padding="0.812rem 1.25rem 1rem"
          >
            <FormLabel
              as="legend"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1px"
              color="var(--neutral-3)"
              px="0.25rem"
            >
              Unidade
            </FormLabel>
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                as="p"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="24px"
                color="var(--neutral-5)"
              >
                {agent.branch}
              </Text>
              <FiChevronDown />
            </Flex>
          </FormControl>
        </Flex>

        <Flex w="100%" maxWidth="26.125rem" maxHeight="3.5rem">
          <FormControl
            as="fieldset"
            border="2px solid #CAD6D1"
            backgroundColor="#F5FAF8"
            borderRadius="0.5rem"
            padding="0.812rem 1.25rem 1rem"
          >
            <FormLabel
              as="legend"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1px"
              color="var(--neutral-3)"
              px="0.25rem"
            >
              Status
            </FormLabel>
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                as="p"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="24px"
                color="var(--neutral-5)"
              >
                {agent.status === 'active' ? 'Ativo' : 'Inativo'}
              </Text>
              <FiChevronDown />
            </Flex>
          </FormControl>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
