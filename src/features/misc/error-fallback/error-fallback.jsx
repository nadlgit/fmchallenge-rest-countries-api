import styles from './error-fallback.module.css';

export const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert" className={styles.fallback}>
    <p>Apologies, something went wrong.</p>
    <code>{error?.message}</code>
  </div>
);
