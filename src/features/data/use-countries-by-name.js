import { API_URL, fetchCountries } from './fetch-countries';
import { useEffect, useState } from 'react';

export const useCountriesByName = (query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    if (typeof query === 'string') {
      fetchCountries(`${API_URL}/name/${encodeURI(query)}`)
        .then((data) => {
          setCountries(data);
        })
        .catch((error) => setError(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [query]);
  return { isLoading, error, countries };
};
