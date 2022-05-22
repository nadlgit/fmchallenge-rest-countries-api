import { composeCountryFromJSON } from './compose-country';
import { belgium, australia } from 'shared/test/mock-countries-api';

describe('composeCountry', () => {
  test('with borders', () => {
    const testValue = belgium;
    const result = composeCountryFromJSON(testValue);
    expect(result.code).toBe(testValue.alpha3Code);
    expect(result.name).toBe(testValue.name);
    expect(result.nativeName).toBe(testValue.nativeName);
    expect(result.region).toBe(testValue.region);
    expect(result.subregion).toBe(testValue.subregion);
    expect(result.flag).toBe(testValue.flag);
    expect(result.capital).toBe(testValue.capital);
    expect(result.population).toBe(testValue.population);
    expect(result.topLevelDomain).toBe(testValue.topLevelDomain[0]);
    expect(result.currencies).toEqual(testValue.currencies.map((item) => item.name) ?? []);
    expect(result.languages).toEqual(testValue.languages.map((item) => item.name) ?? []);
    expect(result.borderCodes).toEqual(testValue.borders ?? []);
  });

  test('without borders', () => {
    const testValue = australia;
    const result = composeCountryFromJSON(testValue);
    expect(result.code).toBe(testValue.alpha3Code);
    expect(result.name).toBe(testValue.name);
    expect(result.nativeName).toBe(testValue.nativeName);
    expect(result.region).toBe(testValue.region);
    expect(result.subregion).toBe(testValue.subregion);
    expect(result.flag).toBe(testValue.flag);
    expect(result.capital).toBe(testValue.capital);
    expect(result.population).toBe(testValue.population);
    expect(result.topLevelDomain).toBe(testValue.topLevelDomain[0]);
    expect(result.currencies).toEqual(testValue.currencies.map((item) => item.name) ?? []);
    expect(result.languages).toEqual(testValue.languages.map((item) => item.name) ?? []);
    expect(result.borderCodes).toEqual(testValue.borders ?? []);
  });
});
