// import styles from './layout.module.css';
import { ThemeSwitch } from './theme-switch';

const title = 'Where in the world?';
export const Layout = ({ children }) => (
  <div>
    <header>
      <h1>
        {title} <ThemeSwitch />
      </h1>
    </header>
    <main>{children}</main>
  </div>
);
