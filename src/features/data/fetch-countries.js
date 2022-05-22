import { composeCountryFromJSON } from './compose-country';

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
