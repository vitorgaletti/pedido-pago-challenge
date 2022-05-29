import { Flex, Image, PopoverBody, Text } from '@chakra-ui/react';
import Link from 'next/link';

import { BiEdit } from 'react-icons/bi';
import { FiEye, FiRepeat } from 'react-icons/fi';

export function PopoverRoles() {
  return (
    <PopoverBody
      w="21.25rem"
      display="flex"
      flexDirection="column"
      gap="1.062rem"
      padding="1.063rem"
      alignItems="flex-start"
    >
      <Flex>
        <Link href={`/role/1`}>
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
                Ver cargo
              </Text>
            </Flex>
          </a>
        </Link>
      </Flex>

      <Flex alignItems="center" gap="1rem" opacity="0.5">
        <BiEdit fontSize="1.5rem" color="var(--neutral-3)" />
        <Text
          as="p"
          fontWeight="500"
          fontSize="1rem"
          lineHeight="24px"
          color="var(--neutral-5)"
        >
          Editar
        </Text>
      </Flex>

      <Flex alignItems="center" gap="1rem" opacity="0.5">
        <Image
          src="/img/duplicate.svg"
          alt="Duplicar"
          fontSize="1.5rem"
          color="var(--neutral-3)"
        />
        <Text
          as="p"
          fontWeight="500"
          fontSize="1rem"
          lineHeight="24px"
          color="var(--neutral-5)"
        >
          Duplicar
        </Text>
      </Flex>

      <Flex alignItems="center" gap="1rem" opacity="0.5">
        <FiRepeat fontSize="1.5rem" color="var(--neutral-3)" />
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
