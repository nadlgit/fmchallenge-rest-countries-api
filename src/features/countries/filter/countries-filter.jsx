import { CustomSelect } from './custom-select';

export const defaultFilterValue = '-';

export const CountriesFilter = ({ filter = '', onFilterChange = (value) => {} }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <CustomSelect
      options={[
        { value: defaultFilterValue, label: 'Filter by Region' },
        ...regions.map((item) => ({ value: item, label: item })),
      ]}
      selectedValue={filter}
      onChange={onFilterChange}
    />
  );
};
