import { Flex, Heading, Icon } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from '../../components/Container';
import { RolesAndPermissions } from '../../components/RolesAndPermissions';
import { api } from '../../service/api';

export interface RoleProps {
  role: {
    name: string;
    department: string;
    grouprules: {
      role: string;
      permissions: {}[];
    }[];
  };
}

export default function Role({ role }: RoleProps) {
  return (
    <>
      <Head>
        <title>Cargos e permissões</title>
      </Head>
      <Container>
        <Flex
          flexDirection="column"
          w="100%"
          h={['100%', '100vh']}
          pt={['2.5rem', '3.5rem']}
          pb="3.125rem"
        >
          <Flex justifyContent="center" alignItems="center" gap="1rem">
            <Link href="/roles">
              <a>
                <Flex
                  w="100%"
                  maxWidth={['2rem', '2.25rem']}
                  h={['2rem', '2.25rem']}
                  alignItems="center"
                  justifyContent="center"
                  background="var(--neutral-2)"
                  borderRadius="5rem"
                  padding="10px"
                >
                  <Icon
                    as={FiArrowLeft}
                    fontSize="24px"
                    color="var(--neutral-black)"
                  />
                </Flex>
              </a>
            </Link>
            <Heading
              as="h3"
              w="56.5rem"
              fontWeight={['bold', 'semibold']}
              fontSize={['24px', '2rem']}
              lineHeight={['24px', '32px']}
              color="var(--neutral-black)"
            >
              Cargos e permissões
            </Heading>
          </Flex>
          <RolesAndPermissions role={role} />
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
