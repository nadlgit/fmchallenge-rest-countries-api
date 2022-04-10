import { CountryCard } from '../country-card';

export const CountriesList = () => {
  const testCountry = {
    code: 'BEL',
    name: 'Belgium',
    region: 'Europe',
    flag: 'https://flagcdn.com/be.svg',
    capital: 'Brussels',
    population: 11555997,
  };
  return (
    <CountryCard
      code={testCountry.code}
      flag={testCountry.flag}
      name={testCountry.name}
      population={testCountry.population}
      region={testCountry.region}
      capital={testCountry.capital}
    />
  );
};
