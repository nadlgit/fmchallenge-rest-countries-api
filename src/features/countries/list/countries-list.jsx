import styles from './countries-list.module.css';
import { CountryCard } from '../country-card';

export const CountriesList = ({ countries }) => (
  <>
    {!countries?.length && <p className={styles.message}>No country match.</p>}
    <div className={styles.list}>
      {countries?.map((country) => (
        <CountryCard
          key={country?.name}
          code={country?.code}
          flag={country?.flag}
          name={country?.name}
          population={country?.population}
          region={country?.region}
          capital={country?.capital}
        />
      ))}
    </div>
  </>
);
