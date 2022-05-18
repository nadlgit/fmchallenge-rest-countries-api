import styles from './country-details.module.css';
import { BsArrowLeft } from 'react-icons/bs';
import { Hyperlink } from 'shared/ui';
import { useNavigate } from 'react-router-dom';

export const CountryDetails = ({ country, borders }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={`${styles.button} ${styles.navback}`}>
        <BsArrowLeft />
        Back
      </button>

      <img src={country?.flag} alt={`${country?.name} flag`} />

      <div>
        <h2>{country?.name}</h2>

        <div className={styles.info}>
          <div>
            <p>
              <span>Native Name:</span> {country?.nativeName}
            </p>
            <p>
              <span>Population:</span> {country?.population?.toLocaleString('en-US')}
            </p>
            <p>
              <span>Region:</span> {country?.region}
            </p>
            <p>
              <span>Sub Region:</span> {country?.subregion}
            </p>
            <p>
              <span>Capital:</span> {country?.capital}
            </p>
          </div>

          <div>
            <p>
              <span>Top Level Domain:</span> {country?.topLevelDomain}
            </p>
            <p>
              <span>Currencies:</span> {country?.currencies?.join(', ')}
            </p>
            <p>
              <span>Languages:</span> {country?.languages?.join(', ')}
            </p>
          </div>
        </div>

        <div className={styles.borders}>
          <h3>Border Countries:</h3>

          <div>
            {borders?.map((item) => (
              <Hyperlink
                url={`/country/${item?.code}`}
                className={`${styles.button} ${styles.navborder}`}
              >
                {item?.name}
              </Hyperlink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
