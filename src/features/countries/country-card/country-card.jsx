import styles from './country-card.module.css';
import { Link } from 'react-router-dom';

export const CountryCard = ({ code, flag, name, population, region, capital }) => (
  <Link className={styles.card} to={`/country/${code}`}>
    <img loading="lazy" src={flag} alt={`${name} flag`} />
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
  </Link>
);
