import { CgSearch } from 'react-icons/cg';

import { Form, Fieldset, Legend, InputSearch, Search } from './styles';

interface SearchFilterProps {
  search: string;
  onSearch: (search: string) => void;
}

export function SearchFilter({ search, onSearch }: SearchFilterProps) {
  return (
    <Form>
      <Fieldset>
        <Legend>Pesquisar por</Legend>
        <Search>
          <CgSearch fontSize="1.5rem" color="var(--neutral-5)" />
          <InputSearch
            type="search"
            placeholder="Pesquise por nome ou cpf"
            value={search}
            onChange={e => onSearch(e.target.value)}
          />
        </Search>
      </Fieldset>
    </Form>
  );
}
