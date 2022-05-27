import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
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
    <Container>
      <Flex flexDirection="column" w="100%" h="100vh" pt="14" pb="3.125rem">
        <Flex justifyContent="center" alignItems="center" gap="1rem">
          <Link href="/">
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
            color="var(--neutral-black)"
          >
            Detalhes do colaborador
          </Heading>
        </Flex>
        <DetailsEmployee agent={agent} />
      </Flex>
    </Container>
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
