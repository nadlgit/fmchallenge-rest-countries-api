import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAllCountries, useCountriesByName, withLoading } from 'features/data';
import {
  CountriesList,
  CountriesActionBar,
  defaultFilterValue,
  SkeletonList,
} from 'features/countries';

export const ResultsPage = () => {
  const { query } = useParams();
  const [filter, setFilter] = useState(defaultFilterValue);
  useEffect(() => {
    setFilter(defaultFilterValue);
  }, [query]);
  return (
    <>
      <CountriesActionBar filter={filter} onFilterChange={setFilter} />
      {query ? <CountriesByName query={query} filter={filter} /> : <AllCountries filter={filter} />}
    </>
  );
};

const CountriesListWithLoading = ({ isLoading, error, countries, filter }) =>
  withLoading(CountriesList)({
    LoadingComponent: SkeletonList,
    isLoading,
    error,
    countries:
      filter === defaultFilterValue
        ? countries
        : countries?.filter((country) => country?.region === filter),
  });

const CountriesByName = ({ query, filter }) => {
  const { isLoading, error, countries } = useCountriesByName(query);
  return (
    <CountriesListWithLoading
      isLoading={isLoading}
      error={error}
      countries={countries}
      filter={filter}
    />
  );
};

const AllCountries = ({ filter }) => {
  const { isLoading, error, countries } = useAllCountries();
  return (
    <CountriesListWithLoading
      isLoading={isLoading}
      error={error}
      countries={countries}
      filter={filter}
    />
  );
};
