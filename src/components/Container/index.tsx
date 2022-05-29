import { Container as ContainerChakra } from '@chakra-ui/react';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <ContainerChakra
      w="100%"
      maxW="104rem"
      h="100%"
      bg="var(--gray)"
      float="right"
      borderLeft="1px solid #EAEFED;"
      boxShadow="0px 4px 8px rgba(165, 171, 179, 0.16);"
      filter=" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      overflow="hidden"
      px={['6px', '1rem']}
    >
      {children}
    </ContainerChakra>
  );
}
