import { useParams } from 'react-router-dom';
import { CountriesContainer } from 'features/countries';

export const ResultsPage = () => {
  const { query } = useParams();
  return <CountriesContainer query={query} />;
};
