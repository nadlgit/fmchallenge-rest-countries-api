import { useParams } from 'react-router-dom';
import { CountriesContainer } from 'features/countries';

export const ResultsPage = () => {
  const { query } = useParams();
  if (!query) {
    return <CountriesContainer />;
  }
  //call API etc
  const countries = query;
  return <CountriesContainer countries={countries} />;
};
