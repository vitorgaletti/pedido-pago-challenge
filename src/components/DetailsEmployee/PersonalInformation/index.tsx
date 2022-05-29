import { Box, Flex, Text } from '@chakra-ui/react';
import { AiOutlineIdcard, AiOutlineCalendar } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { AgentProps } from '../../../pages/agent/[id]';

export function PersonalInformation({ agent }: AgentProps) {
  const formattedDocument =
    agent.document.number.substring(0, 3) +
    ' ' +
    agent.document.number.substring(3, 6) +
    ' ' +
    agent.document.number.substring(6, 9) +
    ' ' +
    agent.document.number.substring(9, 11);

  const formattedNumberPhone =
    agent.phone.number.substring(0, 4) +
    ' ' +
    agent.phone.number.substring(4, 8);

  const formattedBirthDate = new Date(agent.birth_date).toLocaleDateString(
    'pt-BR',
    { day: '2-digit', month: '2-digit', year: 'numeric' }
  );

  return (
    <>
      <Text
        as="p"
        fontWeight="600"
        fontSize="1.125rem"
        lineHeight="27px"
        color="var(--neutral-black)"
        pt="2.5rem"
      >
        Informações pessoais
      </Text>

      <Flex pt="1.5rem" gap={['0.5rem', '1.5rem']} flexWrap="wrap">
        <Flex
          w="100%"
          maxWidth={['19.75rem', '17.916rem']}
          backgroundColor="#F5FAF8"
          border="2px solid var(--neutral-2)"
          borderRadius="0.5rem"
          padding="1rem"
          gap="0.5rem"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            padding="0.625rem"
            backgroundColor="var(--neutral-2)"
            borderRadius="5rem"
          >
            <AiOutlineIdcard fontSize="1.125rem" color="var(--neutral-6)" />
          </Box>
          <Flex direction="column">
            <Text
              as="span"
              fontWeight="400"
              fontSize="12px"
              lineHeight="14px"
              color="var(--neutral-5)"
            >
              {agent.document.type}
            </Text>
            <Text
              as="span"
              fontWeight="600"
              fontSize="0.875rem"
              lineHeight="14px"
              color="var(--neutral-5)"
            >
              {formattedDocument}
            </Text>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          maxWidth={['19.75rem', '17.916rem']}
          backgroundColor="#F5FAF8"
          border="2px solid var(--neutral-2)"
          borderRadius="0.5rem"
          padding="1rem"
          gap="0.5rem"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            padding="0.625rem"
            backgroundColor="var(--neutral-2)"
            borderRadius="5rem"
          >
            <BiPhoneCall fontSize="1.125rem" color="var(--neutral-6)" />
          </Box>
          <Flex direction="column">
            <Text
              as="span"
              fontWeight="400"
              fontSize="12px"
              lineHeight="14px"
              color="var(--neutral-5)"
            >
              Telefone
            </Text>
            <Text
              as="span"
              fontWeight="600"
              fontSize="0.875rem"
              lineHeight="14px"
              color={['var(--neutral-black)', 'var(--neutral-5)']}
            >
              +{agent.phone.ddd} {agent.phone.ddi} {formattedNumberPhone}
            </Text>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          maxWidth={['19.75rem', '17.916rem']}
          backgroundColor="#F5FAF8"
          border="2px solid var(--neutral-2)"
          borderRadius="0.5rem"
          padding="1rem"
          gap="0.5rem"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            padding="0.625rem"
            backgroundColor="var(--neutral-2)"
            borderRadius="5rem"
          >
            <AiOutlineCalendar fontSize="1.125rem" color="var(--neutral-6)" />
          </Box>
          <Flex direction="column">
            <Text
              as="span"
              fontWeight="400"
              fontSize="12px"
              lineHeight="14px"
              color="var(--neutral-5)"
            >
              Nascimento
            </Text>
            <Text
              as="span"
              fontWeight="600"
              fontSize="0.875rem"
              lineHeight="14px"
              color={['var(--neutral-black)', 'var(--neutral-5)']}
            >
              {formattedBirthDate}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
