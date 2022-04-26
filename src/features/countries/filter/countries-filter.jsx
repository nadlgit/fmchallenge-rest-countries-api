import styles from './countries-filter.module.css';

export const CountriesFilter = ({ filter = '', onFilterChange = (value) => {} }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };
  return (
    <div className={styles.filter}>
      <select onChange={handleChange}>
        <option value="" selected={filter === ''}>
          Filter by Region
        </option>
        {regions.map((item) => (
          <option key={item} selected={filter === item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
