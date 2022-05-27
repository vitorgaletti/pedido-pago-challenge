import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Text,
  Flex
} from '@chakra-ui/react';
import { FiMoreVertical, FiEye } from 'react-icons/fi';

import { FaRegTrashAlt } from 'react-icons/fa';
import Link from 'next/link';

export function PopoverActions() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          padding="0"
          backgroundColor="transparent"
          _hover={{
            backgroundColor: 'transparent'
          }}
        >
          <FiMoreVertical fontSize="1.5rem" color="var(--neutral-5)" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w="100%"
        maxWidth="340px"
        bg="var(--white)"
        borderRadius="0.5rem"
        boxShadow="0px 8px 24px rgba(165, 171, 179, 0.4)"
        _focus={{
          boxShadow: '0px 8px 24px rgba(165, 171, 179, 0.4)',
          outline: '0'
        }}
      >
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
      </PopoverContent>
    </Popover>
  );
}
