import { API_URL } from 'shared/config';
import { fetchCountries } from './fetch-countries';
import { useEffect, useState } from 'react';

export const useAllCountries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetchCountries(`${API_URL}/all`)
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return { isLoading, error, countries };
};
