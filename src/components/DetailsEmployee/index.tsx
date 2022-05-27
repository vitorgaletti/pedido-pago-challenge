import { Avatar, Flex, Text } from '@chakra-ui/react';
import { AgentProps } from '../../pages/agent/[id]';
import { OrganizationalData } from './OrganizationalData';
import { PersonalInformation } from './PersonalInformation';

export function DetailsEmployee({ agent }: AgentProps) {
  return (
    <Flex
      direction="column"
      w="100%"
      maxW="59.75rem"
      h="calc(100vh - 408.25px)"
      bg="var(--white)"
      boxShadow="0px 4px 8px rgba(165, 171, 179, 0.16)"
      borderRadius="lg"
      alignSelf="center"
      px="1.5rem"
      pt="2.5rem"
      marginTop="1.5rem"
    >
      <Flex gap="1.5rem">
        <Avatar fontSize="5rem" src={agent.image} />
        <Flex direction="column" gap="0.25rem" justifyContent="center">
          <Text
            as="p"
            fontWeight="600"
            fontSize="1.125rem"
            lineHeight="27px"
            color="var(--neutral-black)"
          >
            {agent.name}
          </Text>
          <Text
            as="span"
            fontWeight="400"
            fontSize="0.875rem"
            lineHeight="17px"
            color="var(--neutral-5)"
          >
            {agent.email}
          </Text>
        </Flex>
      </Flex>

      <PersonalInformation agent={agent} />
      <OrganizationalData agent={agent} />
    </Flex>
  );
}
