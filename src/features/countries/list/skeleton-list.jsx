import styles from './countries-list.module.css';
import { SkeletonCard } from '../country-card';

const NB_SKELETON_CARDS = 8;
export const SkeletonList = () => (
  <div className={styles.list}>{Array(NB_SKELETON_CARDS).fill(<SkeletonCard />)}</div>
);
