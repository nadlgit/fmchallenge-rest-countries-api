import styles from './hyperlink.module.css';
import { Link } from 'react-router-dom';

export const Hyperlink = ({ url, ...props }) => (
  <Link {...props} to={url} className={`${styles.link} ${props.className ?? ''}`}>
    {props.children}
  </Link>
);
