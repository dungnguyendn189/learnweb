import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggetstAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
        alt=""
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>
            Dũng Đẹp Trai
            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
          </strong>
        </p>
        <p className={cx('name')}>dungmap</p>
      </div>
    </div>
  );
}

export default AccountItem;
