export const CountryDetails = ({ country, borders }) => {
  return (
    <h1>
      CountryDetails: "{country.name}" with {borders?.length} borders
    </h1>
  );
};
