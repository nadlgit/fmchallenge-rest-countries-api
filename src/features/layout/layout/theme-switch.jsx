import styles from './theme-switch.module.css';
import { useTheme } from 'features/theme';
import { BsMoon, BsSunFill } from 'react-icons/bs';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={styles.button}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <BsMoon /> : <BsSunFill />}
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};
