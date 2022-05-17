import { BsArrowLeft } from 'react-icons/bs';
import { Hyperlink } from 'shared/ui';
import { useNavigate } from 'react-router-dom';

export const CountryDetails = ({ country, borders }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <BsArrowLeft />
        Back
      </button>
      <img src={country?.flag} alt={`${country?.name} flag`} />
      <h2>{country?.name}</h2>
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
      <p>
        <span>Top Level Domain:</span> {country?.topLevelDomain}
      </p>
      <p>
        <span>Currencies:</span> {country?.currencies?.join(',')}
      </p>
      <p>
        <span>Languages:</span> {country?.languages?.join(',')}
      </p>
      <h3>Border Countries:</h3>
      {borders?.map((item) => (
        <Hyperlink url={`/country/${item?.code}`}>{item?.name}</Hyperlink>
      ))}
    </div>
  );
};
