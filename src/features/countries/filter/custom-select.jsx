import { useState } from 'react';
// import styles from './custom-select.module.css';

export const CustomSelect = ({ options = [], onChange = (value) => {} }) => {
  const [value, setValue] = useState();
  const handleChange = (e) => {
    const newValue = options[e.target.selectedIndex]?.value;
    setValue(newValue);
    onChange(newValue);
  };
  return (
    <select onChange={handleChange} value={value}>
      {options.map((item, key) => (
        <option key={key}>{item?.label}</option>
      ))}
    </select>
  );
};
