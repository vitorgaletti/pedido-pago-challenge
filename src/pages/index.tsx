import { Flex, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container } from '../components/Container';
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
      <Container>
        <Flex
          flexDirection="column"
          w="100%"
          h="100%"
          pt={['10', '14']}
          pb={['7.812rem', '5rem']}
        >
          <Heading
            as="h2"
            w={['22.5rem', '59.75rem']}
            fontFamily="Poppins"
            fontWeight={['bold', 'semibold']}
            fontSize={['1.5rem', '2rem']}
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
