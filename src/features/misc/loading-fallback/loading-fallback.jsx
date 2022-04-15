import styles from './loading-fallback.module.css';

export const LoadingFallback = () => (
  <div role="status" className={styles.loading}>
    Loading, please wait ...
  </div>
);
