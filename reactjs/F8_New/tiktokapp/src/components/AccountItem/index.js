import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/499ea773799dcb1f04598b6ba4064942~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709283600&x-signature=eTcBKiWDcvBPLrS7wm%2BTQERi3Io%3D"
                alt="Avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tân Bú Lồn</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('userName')}>lonsongloi</span>
            </div>
        </div>
    );
}

export default AccountItem;
