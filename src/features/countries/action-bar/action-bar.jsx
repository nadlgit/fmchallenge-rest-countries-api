import styles from './action-bar.module.css';
import { CountriesSearch } from '../search';
import { CountriesFilter } from '../filter';

export { defaultFilterValue } from '../filter';

export const CountriesActionBar = ({ filter = '', onFilterChange = (value) => {} }) => {
  return (
    <div className={styles.actionbar}>
      <CountriesSearch />
      <CountriesFilter filter={filter} onFilterChange={onFilterChange} />
    </div>
  );
};
