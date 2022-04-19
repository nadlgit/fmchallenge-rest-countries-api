import styles from './layout.module.css';
import { ThemeSwitch } from './theme-switch';

export const Layout = ({ children }) => (
  <>
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <ThemeSwitch />
    </header>
    <main>{children}</main>
  </>
);
