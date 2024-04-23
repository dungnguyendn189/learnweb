import classNames from 'classnames/bind';
import styles from './SuggetstAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PoperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PoperWrapper>
          <AccountPreview />
        </PoperWrapper>
      </div>
    );
  };
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-12,12]}
        render={renderPreview}
        placement="bottom"
      >
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
      </Tippy>
    </div>
  );
}

export default AccountItem;
