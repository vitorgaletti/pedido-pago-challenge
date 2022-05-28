import { Flex, Heading, Icon } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from '../../components/Container';
import { RolesAndPermissions } from '../../components/RolesAndPermissions';
import { api } from '../../service/api';

interface RoleProps {
  role: {
    name: string;
    department: string;
    group_rules: {};
  };
}

export default function Role() {
  return (
    <>
      <Head>
        <title>Cargos e permissões</title>
      </Head>
      <Container>
        <Flex flexDirection="column" w="100%" h="100vh" pt="14" pb="3.125rem">
          <Flex justifyContent="center" alignItems="center" gap="1rem">
            <Link href="/roles">
              <a>
                <Flex
                  w="100%"
                  maxWidth="2.25rem"
                  h="2.25rem"
                  alignItems="center"
                  justifyContent="center"
                  background="var(--neutral-2)"
                  borderRadius="5rem"
                  padding="10px"
                >
                  <Icon
                    as={FiArrowLeft}
                    fontSize="1.5rem"
                    color="var(--neutral-black)"
                  />
                </Flex>
              </a>
            </Link>
            <Heading
              as="h3"
              w="56.5rem"
              fontWeight="semibold"
              fontSize="2rem"
              lineHeight="32px"
              color="var(--neutral-black)"
            >
              Cargos e permissões
            </Heading>
          </Flex>
          <RolesAndPermissions />
        </Flex>
      </Container>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context?.query;
  try {
    const response = await api.get(`/role/${id}`);
    const data = await response.data.role;

    console.log(data);

    return {
      props: {
        role: data
      }
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
};
