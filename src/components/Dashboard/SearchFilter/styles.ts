import styled from '@emotion/styled';

export const Form = styled('form')`
  width: 100%;
  max-width: 56.75rem;
  margin: 0 auto;
`;

export const Fieldset = styled('fieldset')`
  padding: 0.75rem;
  border: 2px solid var(--neutral-2);
  border-radius: 0.5rem;

  &:focus-within {
    border: 3px solid var(--neutral-2);
  }
`;

export const Legend = styled('legend')`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1px;
  color: var(--neutral-3);
  padding: 0 4px;
`;

export const InputSearch = styled('input')`
  width: 100%;
  border: none;
  outline: none;

  &::placeholder {
    font-weight: 500;
    font-size: 1rem;
    color: var(--neutral-5);
  }
`;

export const Search = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
