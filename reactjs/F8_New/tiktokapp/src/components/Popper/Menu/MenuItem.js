import Button from '~/components/Button';
import classNames from 'classnames/bind';
import Styles from './Menu.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(Styles);

function MenuItem({ data, onClick }) {
  const classes = cx('menu-item', { separet: data.separet });
  return (
    <Button
      className={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object.isRequired,
  onclick: PropTypes.func,
};
export default MenuItem;
