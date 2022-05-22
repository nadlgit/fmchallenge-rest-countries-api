import { API_URL } from 'shared/config';
import { fetchCountries } from './fetch-countries';
import { useEffect, useState } from 'react';

export const useCountryWithBordersByCode = (code) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState({});
  const [borders, setBorders] = useState([]);
  useEffect(() => {
    if (typeof code === 'string' && code.trim().length > 0) {
      fetchCountries(`${API_URL}/alpha/${encodeURI(code.trim())}`)
        .then((countries) => {
          return countries.length === 1 ? countries[0] : {};
        })
        .then((country) => {
          setCountry(country);
          return country?.borderCodes?.length > 0
            ? fetchCountries(`${API_URL}/alpha?codes=${encodeURI(country?.borderCodes?.join(','))}`)
            : [];
        })
        .then((borders) => {
          setBorders(borders);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [code]);
  return { isLoading, error, country, borders };
};
