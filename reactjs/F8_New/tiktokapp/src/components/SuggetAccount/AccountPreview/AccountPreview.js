import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img
          className={cx('avatar')}
          src="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
          alt="Avatar"
        />
        <div>
          <Button className={cx('fl-btn')} primary small>
            Flowwing
          </Button>
        </div>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>
            Dũng Đẹp Trai
            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
          </strong>
        </p>
        <p className={cx('name')}>dungmap</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Follower </span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes </span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
