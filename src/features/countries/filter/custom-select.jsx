import styles from './custom-select.module.css';
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const getOptionByValue = (options, value) =>
  options?.length > 0
    ? options?.find((item) => item?.value === value) ?? options[0]
    : { value: '', label: '' };

export const CustomSelect = ({ options = [], selectedValue = '', onChange = (value) => {} }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [currentOption, setCurrentOption] = useState(getOptionByValue(options, selectedValue));

  const handleChange = (newValue) => {
    setIsClosed(true);
    setCurrentOption(getOptionByValue(options, newValue));
    onChange(newValue);
  };

  useEffect(() => {
    setCurrentOption(getOptionByValue(options, selectedValue));
  }, [options, selectedValue]);

  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsClosed((value) => !value)}
        className={styles.select}
        role="combobox"
        value={currentOption?.value}
        aria-expanded={!isClosed}
        aria-controls=""
      >
        {currentOption?.label}
        <MdKeyboardArrowDown />
      </button>
      <div className={styles.options}>
        {options?.map((item, key) => (
          <button
            key={key}
            onClick={() => handleChange(item?.value)}
            role="option"
            value={item?.value}
            hidden={isClosed || item?.value === currentOption?.value}
            aria-selected={item?.value === currentOption?.value}
          >
            {item?.label}
          </button>
        ))}
      </div>
    </div>
  );
};
