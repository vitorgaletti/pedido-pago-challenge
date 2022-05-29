import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  SimpleGrid,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import { RoleProps } from '../../pages/role/[id]';
import { ListPermissions } from './ListPermissions';

export function RolesAndPermissions({ role }: RoleProps) {
  const [isMobile] = useMediaQuery('(max-width: 767px)');
  return (
    <Flex
      direction="column"
      w="100%"
      h="100%"
      maxW="59.75rem"
      bg="var(--white)"
      boxShadow="0px 4px 8px rgba(165, 171, 179, 0.16)"
      borderRadius="lg"
      alignSelf="center"
      px={['1rem', '1.5rem']}
      pt="2.5rem"
      gap={['1.5rem', '2.5rem']}
      marginTop="1.5rem"
    >
      <Text
        as="h4"
        fontWeight="600"
        fontSize="1rem"
        lineHeight="16px"
        color="var(--neutral-black)"
      >
        Dados do cargo
      </Text>

      <SimpleGrid columns={[1, 2]} spacing={6}>
        <Flex w="100%" maxWidth="26.125rem" maxHeight="3.5rem">
          <FormControl
            as="fieldset"
            border="2px solid #CAD6D1"
            backgroundColor="#F5FAF8"
            borderRadius="0.5rem"
            padding="0.812rem 1.25rem 1rem"
          >
            <FormLabel
              as="legend"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1px"
              color="var(--neutral-3)"
              px="0.25rem"
            >
              Departamento
            </FormLabel>
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                as="p"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="24px"
                color="var(--neutral-5)"
              >
                {role.department}
              </Text>
            </Flex>
          </FormControl>
        </Flex>

        <Flex w="100%" maxWidth="26.125rem" maxHeight="3.5rem">
          <FormControl
            as="fieldset"
            border="2px solid #CAD6D1"
            backgroundColor="#F5FAF8"
            borderRadius="0.5rem"
            padding="0.812rem 1.25rem 1rem"
          >
            <FormLabel
              as="legend"
              fontWeight="500"
              fontSize="0.875rem"
              lineHeight="1px"
              color="var(--neutral-3)"
              px="0.25rem"
            >
              Cargo
            </FormLabel>
            <Flex alignItems="center" justifyContent="space-between">
              <Text
                as="p"
                fontWeight="500"
                fontSize="1rem"
                lineHeight="24px"
                color="var(--neutral-5)"
              >
                {role.name}
              </Text>
            </Flex>
          </FormControl>
        </Flex>
      </SimpleGrid>

      {isMobile && (
        <Box
          w="100vw"
          marginX="-1rem"
          marginY="2.5rem"
          borderBottom="2px solid var(--gray)"
        ></Box>
      )}

      <ListPermissions role={role} />
    </Flex>
  );
}
