import cardStyles from './country-card.module.css';
import flagStyles from './country-flag.module.css';
import skeletonStyles from './skeleton-card.module.css';

export const SkeletonCard = () => (
  <div className={cardStyles.card}>
    <div className={`${flagStyles.container} ${skeletonStyles.image}`}></div>
    <h2 className={skeletonStyles.title}>&nbsp;</h2>
    <p className={skeletonStyles.text}>&nbsp;</p>
    <p className={skeletonStyles.text}>&nbsp;</p>
    <p className={skeletonStyles.text}>&nbsp;</p>
  </div>
);
