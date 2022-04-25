import styles from './countries-search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const CountriesSearch = ({ placeHolder = 'Search for a country...' }) => {
  const navigate = useNavigate();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.target.value.trim() && navigate(`/search/${e.target.value}`);
      e.target.value = '';
    }
  };
  return (
    <div className={styles.search}>
      <FaSearch />
      <input type="search" onKeyPress={handleKeyPress} placeholder={placeHolder} />
    </div>
  );
};
