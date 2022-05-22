export const composeCountryFromJSON = (json) => ({
  code: json?.alpha3Code,
  name: json?.name,
  nativeName: json?.nativeName,
  region: json?.region,
  subregion: json?.subregion,
  flag: json?.flag,
  capital: json?.capital,
  population: json?.population,
  topLevelDomain: json?.topLevelDomain[0],
  currencies: json?.currencies ? json?.currencies?.map((item) => item.name) : [],
  languages: json?.languages ? json?.languages?.map((item) => item.name) : [],
  borderCodes: json?.borders ? json?.borders : [],
});
