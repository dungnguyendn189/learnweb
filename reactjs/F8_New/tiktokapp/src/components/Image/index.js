import { useState, forwardRef } from 'react';
import imgaes from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(
  (
    {
      src,
      alt,
      fallback: customFallback = imgaes.noImage,
      className,
      ...props
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(className, styles.wrapper)}
        {...props}
        r
        ef={ref}
        src={fallback || src}
        alt={alt}
        onError={handleError}
      />
    );
  },
);

export default Image;
