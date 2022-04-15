import { CountriesList } from '../list';

export const CountriesContainer = ({ countries }) => {
  return (
    <>
      <h1>CountriesContainer</h1>
      <CountriesList countries={countries} />
    </>
  );
};
