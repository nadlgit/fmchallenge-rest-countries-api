import { useCountryWithBordersByCode } from './use-country-with-borders-by-code';
import { render, waitFor } from '@testing-library/react';
import {
  server,
  australia,
  india,
  testCountries,
  alphaErrorHandler,
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
  test('with result without border countries', async () => {
    const testValue = australia;
    expect((testValue?.borders ?? []).length).toBe(0);
    let result;
    function UseHook() {
      result = useCountryWithBordersByCode(testValue.alpha3Code);
      return null;
    }
    render(<UseHook />);
    expect(result.isLoading).toBeTruthy();
    expect(result.error).toBeNull();
    expect(result.country).toEqual({});
    expect(result.borders).toEqual([]);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeNull();
    expect(result.country).toEqual(composeCountryFromJSON(testValue));
    expect(result.borders).toEqual([]);
  });

  test('with result with border countries', async () => {
    const testValue = india;
    const testBorders = testCountries.filter((item) =>
      testValue?.borders?.includes(item.alpha3Code)
    );
    expect(testBorders.length).toBeGreaterThan(0);
    let result;
    function UseHook() {
      result = useCountryWithBordersByCode(testValue.alpha3Code);
      return null;
    }
    render(<UseHook />);
    expect(result.isLoading).toBeTruthy();
    expect(result.error).toBeNull();
    expect(result.country).toEqual({});
    expect(result.borders).toEqual([]);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeNull();
    expect(result.country).toEqual(composeCountryFromJSON(testValue));
    expect(result.borders).toEqual(testBorders.map((item) => composeCountryFromJSON(item)));
  });

  test('with empty code', async () => {
    let result;
    function UseHook() {
      result = useCountryWithBordersByCode();
      return null;
    }
    render(<UseHook />);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeNull();
    expect(result.country).toEqual({});
    expect(result.borders).toEqual([]);
  });

  test('with not found', async () => {
    let result;
    function UseHook() {
      result = useCountryWithBordersByCode('ZZZ');
      return null;
    }
    render(<UseHook />);
    expect(result.isLoading).toBeTruthy();
    expect(result.error).toBeNull();
    expect(result.country).toEqual({});
    expect(result.borders).toEqual([]);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeNull();
    expect(result.country).toEqual({});
    expect(result.borders).toEqual([]);
  });

  test('with API error', async () => {
    server.use(alphaErrorHandler);
    let result;
    function UseHook() {
      result = useCountryWithBordersByCode('ZZZ');
      return null;
    }
    render(<UseHook />);
    expect(result.isLoading).toBeTruthy();
    expect(result.error).toBeNull();
    expect(result.country).toEqual({});
    expect(result.borders).toEqual([]);
    await waitFor(() => expect(result.isLoading).toBeFalsy());
    expect(result.error).toBeDefined();
    expect(result.country).toEqual({});
    expect(result.borders).toEqual([]);
  });
});
