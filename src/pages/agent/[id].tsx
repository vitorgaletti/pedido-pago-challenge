import { Flex, Heading, Icon } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { Container } from '../../components/Container';
import { DetailsEmployee } from '../../components/DetailsEmployee';
import { api } from '../../service/api';

export interface AgentProps {
  agent: {
    id: number;
    name: string;
    email: string;
    phone: {
      ddd: string;
      ddi: string;
      number: string;
    };
    document: {
      type: string;
      number: string;
    };
    birth_date: string;
    image: string;
    department: string;
    branch: string;
    role: string;
    status: string;
  };
}

export default function Agent({ agent }: AgentProps) {
  return (
    <>
      <Head>
        <title>Detalhes do Colaborador</title>
      </Head>
      <Container>
        <Flex
          flexDirection="column"
          w="100%"
          h="100vh"
          pt="14"
          pb={['2.5rem', '3.125rem']}
        >
          <Flex
            justifyContent={['flex-start', 'center']}
            alignItems="center"
            gap={['0.875rem', '1rem']}
          >
            <Link href="/">
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
                    fontSize={['1.25rem', '1.5rem']}
                    color="var(--neutral-black)"
                  />
                </Flex>
              </a>
            </Link>
            <Heading
              as="h3"
              w={['18.687rem', '56.5rem']}
              fontWeight={['bold', 'semibold']}
              fontSize={['1.25rem', '2rem']}
              color={['#465953', 'var(--neutral-black)']}
            >
              Detalhes do colaborador
            </Heading>
          </Flex>
          <DetailsEmployee agent={agent} />
        </Flex>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context?.query;
  try {
    const response = await api.get(`/agent/${id}`);
    const data = await response.data.agent;

    return {
      props: {
        agent: data
      }
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true
    };
  }
};
