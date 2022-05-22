import { CountriesSearch } from './countries-search';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom');

describe('CountriesSearch', () => {
  test('with empty input', () => {
    const mockedNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockedNavigate);
    render(<CountriesSearch />);
    const inputEl = screen.getByRole('searchbox');
    expect(inputEl).toHaveValue('');

    userEvent.type(inputEl, `    {enter}`);
    expect(mockedNavigate).not.toHaveBeenCalled();
    expect(inputEl).toHaveValue('');
  });

  test('with input', () => {
    const mockedNavigate = jest.fn();
    useNavigate.mockImplementation(() => mockedNavigate);
    render(<CountriesSearch />);
    const inputEl = screen.getByRole('searchbox');
    expect(inputEl).toHaveValue('');

    const testValue = 'abcdefgh';
    userEvent.type(inputEl, ` ${testValue} {enter}`);
    expect(mockedNavigate).toHaveBeenCalledWith(`/search/${testValue}`);
    expect(inputEl).toHaveValue('');
  });
});
