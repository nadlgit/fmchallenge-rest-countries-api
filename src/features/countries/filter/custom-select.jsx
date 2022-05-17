import styles from './custom-select.module.css';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const CustomSelect = ({ options = [], onChange = (value) => {} }) => {
  const [option, setOption] = useState(options.length > 0 ? options[0] : { value: '', label: '' });
  const [isClosed, setIsClosed] = useState(true);
  const handleChange = (newOption) => {
    setOption(newOption);
    setIsClosed(true);
    onChange(newOption?.value);
  };
  return (
    <div className={styles.container}>
      <button
        onClick={() => setIsClosed((value) => !value)}
        className={styles.select}
        role="combobox"
        aria-expanded={!isClosed}
        aria-controls=""
      >
        {option?.label}
        <MdKeyboardArrowDown />
      </button>
      <div className={`${styles.options} ${isClosed ? styles.closed : ''}`}>
        {options.map((item, key) => (
          <button
            key={key}
            onClick={() => handleChange(item)}
            className={item?.value === option?.value ? styles.currentoption : ''}
            role="option"
            aria-selected={item?.value === option?.value}
          >
            {item?.label}
          </button>
        ))}
      </div>
    </div>
  );
};
