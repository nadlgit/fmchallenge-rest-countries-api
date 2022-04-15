import { useParams } from 'react-router-dom';
import { useAllCountries, useCountriesByName, withLoading } from 'features/data';
import { CountriesContainer } from 'features/countries';

export const ResultsPage = () => {
  const { query } = useParams();
  return query ? <CountriesByName query={query} /> : <AllCountries />;
};

const CountriesByName = ({ query }) => {
  const { isLoading, error, countries } = useCountriesByName(query);
  return withLoading(CountriesContainer)({ isLoading, error, countries });
};

const AllCountries = () => {
  const { isLoading, error, countries } = useAllCountries();
  return withLoading(CountriesContainer)({ isLoading, error, countries });
};
