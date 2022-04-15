export const CountryDetails = ({ country, borders }) => {
  return (
    <>
      <h1>CountryDetails</h1>
      <p>
        {country.name} with {borders?.length} borders
      </p>
    </>
  );
};
