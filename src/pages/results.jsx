import { useParams } from 'react-router-dom';
import { useAllCountries, useCountriesByName, withLoading } from 'features/data';
import { CountriesContainer, CountriesList } from 'features/countries';

export const ResultsPage = () => {
  const { query } = useParams();
  return (
    <CountriesContainer>
      {query ? <CountriesByName query={query} /> : <AllCountries />}
    </CountriesContainer>
  );
};

const CountriesListWithLoading = ({ isLoading, error, countries }) =>
  withLoading(CountriesList)({
    // LoadingComponent: todo,
    isLoading,
    error,
    countries,
  });

const CountriesByName = ({ query }) => {
  const { isLoading, error, countries } = useCountriesByName(query);
  return <CountriesListWithLoading isLoading={isLoading} error={error} countries={countries} />;
};

const AllCountries = () => {
  const { isLoading, error, countries } = useAllCountries();
  return <CountriesListWithLoading isLoading={isLoading} error={error} countries={countries} />;
};
