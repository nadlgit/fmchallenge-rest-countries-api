import { useParams } from 'react-router-dom';
import { CountryDetails } from 'features/country';

export const CountryPage = () => {
  const { code } = useParams();
  return <CountryDetails code={code} />;
};
