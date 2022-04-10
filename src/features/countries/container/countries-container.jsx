import { CountriesList } from '../list';

const testCountry = {
  code: 'BEL',
  name: 'Belgium',
  region: 'Europe',
  flag: 'https://flagcdn.com/be.svg',
  capital: 'Brussels',
  population: 11555997,
};
export const CountriesContainer = ({ query }) => (
  <>
    <h1>CountriesContainer</h1>
    <CountriesList
      countries={[
        testCountry,
        { ...testCountry, name: 'test2' },
        { ...testCountry, name: 'test3' },
        { ...testCountry, name: 'test4' },
        { ...testCountry, name: 'test5' },
      ]}
    />
  </>
);
