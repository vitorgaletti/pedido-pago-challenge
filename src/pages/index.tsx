import { Container, Flex, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Dashboard } from '../components/Dashboard';
import { api } from '../service/api';

export interface Employee {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}
interface HomeProps {
  employees: Employee[];
}

export default function Home({ employees }: HomeProps) {
  return (
    <>
      <Head>
        <title>Tela de Colaboradores</title>
      </Head>
      <Container
        w="100%"
        maxW="104rem"
        h="100%"
        bg="var(--gray)"
        float="right"
        borderLeft="1px solid #EAEFED;"
        boxShadow="0px 4px 8px rgba(165, 171, 179, 0.16);"
        filter=" drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        overflow="hidden"
      >
        <Flex flexDirection="column" w="100%" h="100%" pt="14" pb="3.125rem">
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

          <Dashboard employees={employees} />
        </Flex>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await api.get('/agents');
    const data = await response.data.items;

    return {
      props: {
        employees: data
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
