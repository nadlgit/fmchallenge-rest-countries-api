export const API_URL = 'https://restcountries.com/v2';

const composeCountryFromJSON = (json) => ({
  code: json?.alpha3Code,
  name: json?.name,
  nativeName: json?.nativeName,
  region: json?.region,
  subregion: json?.subregion,
  flag: json?.flag,
  capital: json?.capital,
  population: json?.population,
  topLevelDomain: json?.topLevelDomain[0],
  currencies: json?.currencies?.map((item) => item.name),
  languages: json?.languages?.map((item) => item.name),
  borderCodes: json?.borders,
});

export const fetchCountries = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) return [];
    return Promise.reject(
      new Error(`Unexpected API error ${response.status} ${response.statusText}`)
    );
  }
  const json = await response.json();
  return Array.isArray(json)
    ? json.map((item) => composeCountryFromJSON(item))
    : [composeCountryFromJSON(json)];
};
