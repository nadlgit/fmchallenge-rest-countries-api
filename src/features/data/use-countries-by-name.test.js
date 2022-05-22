import { useCountriesByName } from './use-countries-by-name';
import { render, waitFor } from '@testing-library/react';
import {
  server,
  australia,
  algeria,
  india,
  nameErrorHandler,
} from 'shared/test/mock-countries-api';
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

describe('useCountriesByName', () => {
  test('with result', async () => {
    const testQuery = 'ia';
    const testValues = [australia, algeria, india];
    let result;
    function UseHook() {
      result = useCountriesByName(testQuery);
      return null;
    }
    render(<UseHook />);
    expect(result.isLoading).toBeTruthy();
    expect(result.error).toBeNull();
    expect(result.countries).toEqual([]);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeNull();
    expect(result.countries).toEqual(testValues.map((item) => composeCountryFromJSON(item)));
  });

  test('with empty query', async () => {
    let result;
    function UseHook() {
      result = useCountriesByName();
      return null;
    }
    render(<UseHook />);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeNull();
    expect(result.countries).toEqual([]);
  });

  test('with not found', async () => {
    let result;
    function UseHook() {
      result = useCountriesByName('zzzzz');
      return null;
    }
    render(<UseHook />);
    expect(result.isLoading).toBeTruthy();
    expect(result.error).toBeNull();
    expect(result.countries).toEqual([]);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeNull();
    expect(result.countries).toEqual([]);
  });

  test('with API error', async () => {
    server.use(nameErrorHandler);
    let result;
    function UseHook() {
      result = useCountriesByName('zzzzz');
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
