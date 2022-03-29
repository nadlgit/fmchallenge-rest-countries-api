import styles from './attribution.module.css';

// prettier-ignore
export const ChallengeAttribution = () => (
  <div className={styles.attribution}>
    {// eslint-disable-next-line react/jsx-no-target-blank
    }Challenge by <a href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca" target="_blank">Frontend Mentor</a>
    {// eslint-disable-next-line jsx-a11y/anchor-is-valid
    }. Coded by <a href="#">Nadine</a>.
  </div>
);
