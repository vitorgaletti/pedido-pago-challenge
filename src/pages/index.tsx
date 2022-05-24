import { Container, Flex, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Dashboard } from '../components/Dashboard';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tela de Colaboradores</title>
      </Head>
      <Container
        w="100%"
        maxW="104rem"
        h="100vh"
        bg="var(--gray)"
        float="right"
        borderLeft="1px solid #EAEFED;"
        boxShadow="0px 4px 8px rgba(165, 171, 179, 0.16);"
        filter=" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      >
        <Flex
          flexDirection="column"
          w="100%"
          h="100%"
          pt="14"
          pb="20"
          gap="1.5rem"
        >
          <Heading
            as="h2"
            w="59.75rem"
            fontFamily="Poppins"
            fontWeight="semibold"
            fontSize="2rem"
            color="var(--neutral-black)"
            margin="0 auto"
          >
            Organização
          </Heading>
          <Dashboard />
        </Flex>
      </Container>
    </>
  );
};

export default Home;
