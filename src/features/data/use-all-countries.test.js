import { useAllCountries } from './use-all-countries';
import { render, waitFor } from '@testing-library/react';
import { server, testCountries, allErrorHandler } from 'shared/test/mock-countries-api';
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

describe('useAllCountries', () => {
  test('with result', async () => {
    let result;
    function UseHook() {
      result = useAllCountries();
      return null;
    }
    render(<UseHook />);
    expect(result.isLoading).toBeTruthy();
    expect(result.error).toBeNull();
    expect(result.countries).toEqual([]);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeNull();
    expect(result.countries).toEqual(testCountries.map((item) => composeCountryFromJSON(item)));
  });

  test('with API error', async () => {
    server.use(allErrorHandler);
    let result;
    function UseHook() {
      result = useAllCountries();
      return null;
    }
    render(<UseHook />);
    expect(result.isLoading).toBeTruthy();
    expect(result.error).toBeNull();
    expect(result.countries).toEqual([]);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeDefined();
    expect(result.countries).toEqual([]);
  });
});
