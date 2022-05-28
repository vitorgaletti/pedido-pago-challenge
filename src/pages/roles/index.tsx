import { Flex, Heading } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Container } from '../../components/Container';
import { Dashboard } from '../../components/Dashboard';
import { api } from '../../service/api';

export interface Role {
  name: string;
  departament: string;
  agents_quantity: number;
}

interface RolesProps {
  roles: Role[];
}

export default function Roles({ roles }: RolesProps) {
  return (
    <>
      <Head>
        <title>Tela de Colaboradores</title>
      </Head>
      <Container>
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

          <Dashboard roles={roles} />
        </Flex>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await api.get('/roles');
    const data = await response.data;
    console.log(data.roles);

    return {
      props: {
        roles: data.roles
      }
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
};
