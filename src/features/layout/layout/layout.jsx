import styles from './layout.module.css';
import { ThemeSwitch } from './theme-switch';
import { Link } from 'react-router-dom';

export const Layout = ({ children }) => (
  <>
    <header className={styles.header}>
      <h1>
        <Link to="/">Where in the world?</Link>
      </h1>
      <ThemeSwitch />
    </header>
    <main className={styles.main}>{children}</main>
  </>
);
