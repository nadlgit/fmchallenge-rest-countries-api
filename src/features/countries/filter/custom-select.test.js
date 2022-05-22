import { CustomSelect } from './custom-select';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

describe('CustomSelect', () => {
  const getSelectEl = () => screen.getByRole('combobox');
  const getOptionsEl = () => screen.queryAllByRole('option');
  const getOptionElByText = (text) => screen.queryByRole('option', { name: text });

  const testOptions = Array(5)
    .fill()
    .map((item, key) => ({
      value: `${key + 1}`,
      label: `Option n°${key + 1}`,
    }));
  const testOnChange = jest.fn();
  const testSelectedOption = testOptions[testOptions.length - 1];
  const getSelectableOptions = (selectedOption) =>
    testOptions.filter((item) => item !== selectedOption);

  test('initial state with all props', () => {
    render(
      <CustomSelect
        options={testOptions}
        selectedValue={testSelectedOption.value}
        onChange={testOnChange}
      />
    );
    const expectedSelectedOption = testSelectedOption;
    const selectEl = getSelectEl();
    expect(selectEl).toHaveValue(expectedSelectedOption.value);
    expect(selectEl).toHaveTextContent(expectedSelectedOption.label);
    expect(getOptionsEl().length).toBe(0);

    // Open options
    userEvent.click(selectEl);
    const expectedOptions = getSelectableOptions(expectedSelectedOption);
    const optionsEl = getOptionsEl();
    expect(optionsEl.length).toBe(expectedOptions.length);
    optionsEl.forEach((item, key) => {
      expect(item).toHaveValue(expectedOptions[key].value);
      expect(item).toHaveTextContent(expectedOptions[key].label);
    });

    // Close options
    userEvent.click(selectEl);
    expect(selectEl).toHaveValue(expectedSelectedOption.value);
    expect(selectEl).toHaveTextContent(expectedSelectedOption.label);
    expect(getOptionsEl().length).toBe(0);
  });

  test('initial state without selectedValue props', () => {
    render(<CustomSelect options={testOptions} onChange={testOnChange} />);
    const expectedSelectedOption = testOptions[0];
    const selectEl = getSelectEl();
    expect(selectEl).toHaveValue(expectedSelectedOption.value);
    expect(selectEl).toHaveTextContent(expectedSelectedOption.label);
    expect(getOptionsEl().length).toBe(0);
  });

  test('initial state without options props', () => {
    render(<CustomSelect selectedValue={testSelectedOption.value} onChange={testOnChange} />);
    const selectEl = getSelectEl();
    expect(selectEl).toHaveValue('');
    expect(selectEl).toHaveTextContent('');
    expect(getOptionsEl().length).toBe(0);
  });

  test('select option', () => {
    render(
      <CustomSelect
        options={testOptions}
        selectedValue={testSelectedOption.value}
        onChange={testOnChange}
      />
    );
    const testNewOption = getSelectableOptions(testSelectedOption)[testOptions.length - 2];
    const selectEl = getSelectEl();
    userEvent.click(selectEl);
    userEvent.click(getOptionElByText(testNewOption.label));
    expect(testOnChange).toHaveBeenLastCalledWith(testNewOption.value);
    expect(selectEl).toHaveValue(testNewOption.value);
    expect(selectEl).toHaveTextContent(testNewOption.label);
    expect(getOptionsEl().length).toBe(0);
  });
});
