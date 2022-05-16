import styles from './country-card.module.css';
import { Hyperlink } from 'shared/ui';
import { CountryFlag } from './country-flag';

export const CountryCard = ({ code, flag, name, population, region, capital }) => (
  <Hyperlink url={`/country/${code}`} className={styles.card}>
    <CountryFlag src={flag} alt={`${name} flag`} />
    <h2>{name}</h2>
    <p>
      <span>Population:</span> {population.toLocaleString('en-US')}
    </p>
    <p>
      <span>Region:</span> {region}
    </p>
    <p>
      <span>Capital:</span> {capital}
    </p>
  </Hyperlink>
);
