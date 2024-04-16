import Styles from './SuggetstAccount.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';

const cx = classNames.bind(Styles);
function SuggestAccount({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem />
      <AccountItem />
      <AccountItem />
      <p className={cx('more-btn')}>Xem Thêm</p>
    </div>
  );
}

SuggestAccount.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestAccount;
