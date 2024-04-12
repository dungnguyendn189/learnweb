import Header from './Header';
import Slidebar from '~/components/Sildebar';
import tyles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(tyles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Slidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;
