import { Flex, Image, Avatar, Text, Box } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      h={['4rem', '3.875rem']}
      mx="auto"
      align="center"
      flexDirection={['row-reverse', 'row']}
      justifyContent={['flex-end', 'space-between']}
      gap={['4.937rem', '0']}
    >
      <Box
        borderRight={['none', '1px solid var(--gray)']}
        px={['1rem', '2rem']}
        py="0.878rem"
        gap="0.625rem"
        alignSelf="center"
        justifySelf="center"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/img/logo.svg"
          alt="Logo"
          w={['2.625rem', '2.216rem']}
          h={['2.625rem', '2.168rem']}
          objectFit="fill"
        />
      </Box>
      <Flex
        borderLeft={['none', '1px solid var(--gray)']}
        px={['1rem', '2rem']}
        py="0.878rem"
        gap="0.625rem"
        align="center"
        justify="center"
      >
        <Avatar
          w="2rem"
          h="2rem"
          src="/img/avatar-lz.png"
          border="none"
          outline="none"
        />
        <Flex direction="column" display={['none', 'flex']}>
          <Text fontWeight="600" fontSize="sm" color="var(--neutral-black)">
            Luiz Zlochevsky
          </Text>
          <Text fontWeight="400" fontSize="xs" color="var(--neutral-5)">
            meus dados
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
