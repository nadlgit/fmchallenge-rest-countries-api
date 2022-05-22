import { CustomSelect } from './custom-select';

export const CountriesFilter = ({ filter = '', onFilterChange = (value) => {} }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <CustomSelect
      options={[
        { value: '', label: 'Filter by Region' },
        ...regions.map((item) => ({ value: item, label: item })),
      ]}
      selectedValue={filter}
      onChange={onFilterChange}
    />
  );
};
