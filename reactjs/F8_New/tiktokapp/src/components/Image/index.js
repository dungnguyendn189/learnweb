import { useState, forwardRef } from 'react';
import imgaes from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
        ref={ref}
        src={fallback || src}
        alt={alt}
        onError={handleError}
      />
    );
  },
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
