import { fetchCountries } from './fetch-countries';
import { API_URL } from 'shared/config';
import { server, algeria, testCountries } from 'shared/test/mock-countries-api';
import { composeCountryFromJSON } from './compose-country';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('fetchCountries', () => {
  test('when single item response', async () => {
    const testValue = algeria;
    const result = await fetchCountries(`${API_URL}/alpha/${testValue.alpha3Code}`);
    const expected = [composeCountryFromJSON(testValue)];
    expect(result).toEqual(expected);
  });

  test('when array item response', async () => {
    const result = await fetchCountries(`${API_URL}/all`);
    const expected = testCountries.map((item) => composeCountryFromJSON(item));
    expect(result).toEqual(expected);
  });

  test('when not found response', async () => {
    const result = await fetchCountries(`${API_URL}/alpha/ZZ`);
    const expected = [];
    expect(result).toEqual(expected);
  });

  test('when error response', async () => {
    expect.assertions(1);
    try {
      await fetchCountries(`${API_URL}/alpha`);
    } catch (err) {
      expect(err).toBeDefined();
    }
  });
});
