import { CgSearch } from 'react-icons/cg';

import { Form, Fieldset, Legend, InputSearch, Search } from './styles';

export function SearchFilter() {
  return (
    <Form>
      <Fieldset>
        <Legend>Pesquisar por</Legend>
        <Search>
          <CgSearch fontSize="1.5rem" color="var(--neutral-5)" />
          <InputSearch type="search" placeholder="Pesquise por nome ou cpf" />
        </Search>
      </Fieldset>
    </Form>
  );
}
