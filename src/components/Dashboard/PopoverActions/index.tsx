import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi';

import { PopoverEmployees } from '../ListEmployees/PopoverEmployees';
import { PopoverRoles } from '../ListRoles/PopoverRoles';

interface PopoverActionsProps {
  isEmployees?: boolean;
}

export function PopoverActions({ isEmployees }: PopoverActionsProps) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          padding="0"
          backgroundColor="transparent"
          _hover={{
            backgroundColor: 'transparent'
          }}
        >
          <FiMoreVertical fontSize="1.5rem" color="var(--neutral-5)" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w="100%"
        maxWidth="340px"
        bg="var(--white)"
        borderRadius="0.5rem"
        boxShadow="0px 8px 24px rgba(165, 171, 179, 0.4)"
        _focus={{
          boxShadow: '0px 8px 24px rgba(165, 171, 179, 0.4)',
          outline: '0'
        }}
      >
        {isEmployees ? <PopoverEmployees /> : <PopoverRoles />}
      </PopoverContent>
    </Popover>
  );
}
