import {
  Accordion,
  AccordionButton,
  AccordionItem,
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
import { Role } from '../../../../pages/roles';

interface CardEmployeesProps {
  roles?: Role[];
  search: string;
}

export function CardRoles({ roles, search }: CardEmployeesProps) {
  const [limit, setLimit] = useState(5);

  function loadMoreCardEmployee() {
    const totalEmployees = roles?.length as number;
    if (limit >= totalEmployees) return;
    setLimit(limit + 5);
  }

  const filteredRoles = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase();
    return roles?.filter(roles =>
      roles.name.toLowerCase().includes(lowerCaseSearch)
    );
  }, [search, roles]);

  return (
    <Container w="100%" h="100%" m="0 auto" paddingX="0" pb="0.5rem">
      {filteredRoles
        ?.slice(0, limit ? limit : filteredRoles?.length)
        .map(role => (
          <>
            <Accordion allowToggle border="0" borderColor="transparent">
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <Flex
                      w="100%"
                      height={isExpanded ? '230px' : '65px'}
                      padding="1.5rem 1rem"
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
                      <Grid
                        w="100%"
                        templateColumns="repeat(2, 1fr)"
                        columnGap="1.593rem"
                        rowGap="1rem"
                        pb="1rem"
                      >
                        <Flex direction="column" justifyContent="flex-start">
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
                            {role.name}
                          </Text>
                        </Flex>
                        <Flex direction="column" justifyContent="flex-start">
                          <Text
                            as="p"
                            fontWeight="600"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                            display={isExpanded ? 'block' : 'none'}
                          >
                            Departamento
                          </Text>
                          <Text
                            as="p"
                            fontWeight="400"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                            display={isExpanded ? 'block' : 'none'}
                          >
                            {role.departament}
                          </Text>

                          <Flex
                            alignItems="center"
                            flexDirection="row"
                            justifyContent="flex-end"
                          >
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

                        <Flex direction="column" justifyContent="flex-start">
                          <Text
                            as="p"
                            fontWeight="600"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            Colaboradores
                          </Text>
                          <Text
                            as="p"
                            fontWeight="400"
                            fontSize="12px"
                            lineHeight="17px"
                            color="var(--neutral-5)"
                          >
                            {role.agents_quantity}
                          </Text>
                        </Flex>
                      </Grid>
                      <Link href="/role/1">
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
