import { useParams } from 'react-router-dom';
import { useCountryWithBordersByCode, withLoading } from 'features/data';
import { CountryDetails } from 'features/country';

export const CountryPage = () => {
  const { code } = useParams();
  const { isLoading, error, country, borders } = useCountryWithBordersByCode(code);
  return withLoading(CountryDetails)({ isLoading, error, country, borders });
};
