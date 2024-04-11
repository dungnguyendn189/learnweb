import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  primary = false,
  outline = false,
  large = false,
  small = false,
  disabled = false,
  text = false,
  rounded = false,
  rightIcon,
  leftIcon,
  children,
  onClick,
  className,
  to,
  href,
  ...passProps
}) {
  let Comp = 'button';
  const _props = {
    onClick,
    ...passProps,
  };

  //remnove event listeners when the button is clicked disabled
  if (disabled) {
    Object.keys(_props).forEach((key) => {
      if (key.startsWith('on') && typeof _props[key] === 'function') {
        delete _props[key];
      }
    });
  }

  if (to) {
    _props.to = to;
    Comp = Link;
  } else if (href) {
    _props.href = href;
    Comp = 'a';
  }
  const classes = cx('wrapper', {
    [className]: className,
    outline,
    primary,
    small,
    large,
    text,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {..._props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
