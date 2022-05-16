import { useState } from 'react';
import styles from './country-flag.module.css';

export const CountryFlag = ({ src, alt }) => {
  const designRatio = 264 / 160;
  const [imgRatio, setImgRatio] = useState(designRatio);
  const handleImgSize = (e) => {
    const { width, height } = e.target;
    height && setImgRatio(width / height);
  };
  return (
    <div className={styles.container}>
      <img
        loading="lazy"
        src={src}
        alt={alt}
        onLoad={handleImgSize}
        className={imgRatio > designRatio ? styles.maxheight : styles.maxwidth}
      />
    </div>
  );
};
