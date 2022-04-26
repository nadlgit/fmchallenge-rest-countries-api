import styles from './layout.module.css';
import { ThemeSwitch } from './theme-switch';
import { Hyperlink } from 'shared/ui';

export const Layout = ({ children }) => (
  <>
    <header className={styles.header}>
      <h1>
        <Hyperlink url="/">Where in the world?</Hyperlink>
      </h1>
      <ThemeSwitch />
    </header>
    <main className={styles.main}>{children}</main>
  </>
);
