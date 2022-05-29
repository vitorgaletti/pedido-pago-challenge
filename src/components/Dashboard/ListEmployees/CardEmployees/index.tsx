import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Button,
  Container,
  Flex,
  Grid,
  Text
} from '@chakra-ui/react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { FiFilePlus, FiRefreshCcw } from 'react-icons/fi';

import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { Employee } from '../../../../pages';

interface CardEmployeesProps {
  employees?: Employee[];
  search: string;
}

export function CardEmployees({ employees, search }: CardEmployeesProps) {
  const [limit, setLimit] = useState(5);

  function loadMoreCardEmployee() {
    const totalEmployees = employees?.length as number;
    if (limit >= totalEmployees) return;
    setLimit(limit + 5);
  }

  const filteredEmployess = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase();
    return employees?.filter(employee =>
      employee.name.toLowerCase().includes(lowerCaseSearch)
    );
  }, [search, employees]);

  return (
    <Container w="100%" h="100%" m="0 auto" paddingX="0" pb="0.5rem">
      {filteredEmployess
        ?.slice(0, limit ? limit : filteredEmployess?.length)
        .map(employee => (
          <>
            <Accordion allowToggle border="0" borderColor="transparent">
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <Flex
                      w="100%"
                      height={isExpanded ? '396px' : '89px'}
                      opacity={employee.status === 'active' ? '1' : '0.3'}
                      padding="1rem 1.5rem"
                      flexDirection="column"
                      border={
                        isExpanded
                          ? '2px solid var(--feedback-success)'
                          : '2px solid var(--gray)'
                      }
                      borderRadius="0.5rem"
                      filter="drop-shadow(0px 4px 8px rgba(165, 171, 179, 0.16))"
                      overflow="hidden"
                    >
                      <Text
                        as="p"
                        fontWeight="600"
                        fontSize="12px"
                        lineHeight="17px"
                        color="var(--neutral-5)"
                      >
                        Nome Completo
                      </Text>
                      <Flex mt="0.5rem" alignItems="center" gap="0.5rem">
                        <Avatar
                          w="100%"
                          maxWidth="32px"
                          h="32px"
                          borderRadius="5rem"
                          src={employee.image}
                        />
                        <Flex align="center" justifyContent="center" w="100%">
                          <Text
                            as="p"
                            w="158px"
                            fontWeight="600"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            {employee.name}
                          </Text>
                          <AccordionButton w="auto" pl="40px">
                            {isExpanded ? (
                              <RiArrowUpSLine
                                fontSize="24px"
                                color="var(--neutral-5)"
                              />
                            ) : (
                              <RiArrowDownSLine
                                fontSize="24px"
                                color="var(--neutral-5)"
                              />
                            )}
                          </AccordionButton>
                        </Flex>
                      </Flex>

                      <Grid
                        my="2rem"
                        w="100%"
                        templateColumns="repeat(2, 1fr)"
                        gap="1.5rem"
                      >
                        <Flex direction="column" justifyContent="center">
                          <Text
                            as="p"
                            fontWeight="600"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            Departamento
                          </Text>
                          <Text
                            as="p"
                            fontWeight="400"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            {employee.department}
                          </Text>
                        </Flex>
                        <Flex direction="column" justifyContent="center">
                          <Text
                            as="p"
                            fontWeight="600"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            Cargo
                          </Text>
                          <Text
                            as="p"
                            fontWeight="400"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            {employee.role}
                          </Text>
                        </Flex>
                        <Flex direction="column" justifyContent="center">
                          <Text
                            as="p"
                            fontWeight="600"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            Unidade
                          </Text>
                          <Text
                            as="p"
                            fontWeight="400"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            123456789
                          </Text>
                        </Flex>
                        <Flex direction="column" justifyContent="center">
                          <Text
                            as="p"
                            fontWeight="600"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            Unidade
                          </Text>
                          <Text
                            as="p"
                            fontWeight="400"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            {employee.branch}
                          </Text>
                        </Flex>

                        <Flex direction="column" justifyContent="center">
                          <Text
                            as="p"
                            fontWeight="600"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            Status
                          </Text>
                          <Flex
                            w="4.5rem"
                            h="1.5rem"
                            background="var(--feedback-success)"
                            borderRadius="5rem"
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Text
                              as="p"
                              fontWeight="500"
                              fontSize="14px"
                              lineHeight="16px"
                              color="var(--neutral-black)"
                            >
                              {employee.status === 'active'
                                ? 'Ativo'
                                : 'Inativo'}
                            </Text>
                          </Flex>
                        </Flex>
                      </Grid>
                      <Link href="/agent/1">
                        <a>
                          <Flex
                            w="100%"
                            border="2px solid var(--feedback-success)"
                            borderRadius="0.5rem"
                            gap="0.5rem"
                            justifyContent="center"
                            alignItems="center"
                            paddingY="0.875rem"
                            cursor="pointer"
                          >
                            <Button
                              border="none"
                              backgroundColor="transparent"
                              _hover={{
                                backgroundColor: 'transparent'
                              }}
                              disabled={employee.status !== 'active'}
                            >
                              <FiFilePlus fontSize="24px" color="#1DD195" />
                              <Text
                                as="p"
                                fontWeight="600"
                                fontSize="16px"
                                lineHeight="24px"
                                color="var(--neutral-black)"
                              >
                                Ações
                              </Text>
                            </Button>
                          </Flex>
                        </a>
                      </Link>
                    </Flex>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </>
        ))}
      <Button
        onClick={loadMoreCardEmployee}
        w="100%"
        border="2px solid var(--feedback-success)"
        borderRadius="0.5rem"
        alignItems="center"
        padding="1.5rem"
        mt="2.375rem"
        mb="2.5rem"
        backgroundColor="transparent"
        _hover={{
          backgroundColor: 'transparent'
        }}
      >
        <FiRefreshCcw fontSize="24px" color="#1DD195" />
        <Text
          as="p"
          paddingLeft="0.5rem"
          fontWeight="600"
          fontSize="16px"
          lineHeight="24px"
          color="var(--neutral-black)"
        >
          Carregar mais
        </Text>
      </Button>
    </Container>
  );
}
