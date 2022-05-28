import { CircularProgress, Flex } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Flex
      align="center"
      justify="center"
      bg="rgba(234, 239, 237, .9)"
      position="fixed"
      top="0"
      right="0"
      w="100vw"
      h="100vh"
      z-index="20"
    >
      <CircularProgress
        isIndeterminate
        color="var(--primary-color)"
        size="3.75rem"
      />
    </Flex>
  );
}
