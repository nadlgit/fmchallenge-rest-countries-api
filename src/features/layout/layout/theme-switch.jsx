// import styles from './theme-switch.module.css';
import { useTheme } from 'features/theme';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return theme === 'light' ? (
    <button onClick={() => setTheme('dark')}>Dark mode</button>
  ) : (
    <button onClick={() => setTheme('light')}>Light mode</button>
  );
};
