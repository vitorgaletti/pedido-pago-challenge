import { Flex, PopoverBody, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FiEye } from 'react-icons/fi';

export function PopoverEmployees() {
  return (
    <PopoverBody
      w="21.25rem"
      display="flex"
      flexDirection="column"
      gap="2.375rem"
      padding="1.063rem"
      alignItems="flex-start"
    >
      <Flex>
        <Link href={`/agent/1`}>
          <a>
            <Flex alignItems="center" gap="1rem">
              <FiEye fontSize="1.5rem" color="var(--neutral-3)" />
              <Text
                as="p"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="24px"
                color="var(--neutral-5)"
              >
                Ver colaborador
              </Text>
            </Flex>
          </a>
        </Link>
      </Flex>

      <Flex alignItems="center" gap="1rem" opacity="0.5">
        <FaRegTrashAlt
          fontSize="1.5rem
            "
          color="var(--neutral-3)"
        />
        <Text
          as="p"
          fontWeight="500"
          fontSize="1rem"
          lineHeight="24px"
          color="var(--neutral-5)"
        >
          Excluir
        </Text>
      </Flex>
    </PopoverBody>
  );
}
