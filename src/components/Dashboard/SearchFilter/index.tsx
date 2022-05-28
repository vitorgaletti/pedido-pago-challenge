import { CgSearch } from 'react-icons/cg';

import { Form, Fieldset, Legend, InputSearch, Search } from './styles';

interface SearchFilterProps {
  search: string;
  onSearch: (search: string) => void;
  selectTab: string;
}

export function SearchFilter({
  search,
  onSearch,
  selectTab
}: SearchFilterProps) {
  return (
    <Form>
      <Fieldset>
        <Legend>Pesquisar por</Legend>
        <Search>
          <CgSearch fontSize="1.5rem" color="var(--neutral-5)" />
          <InputSearch
            type="search"
            placeholder={
              selectTab === 'Colaboradores'
                ? 'Pesquise por nome ou cpf'
                : 'Pesquise por cargo'
            }
            value={search}
            onChange={e => onSearch(e.target.value)}
          />
        </Search>
      </Fieldset>
    </Form>
  );
}
