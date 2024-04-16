import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header>
        <img className={cx('')} src="" alt="" />
        <Button primary>Flowwing</Button>
      </header>
    </div>
  );
}

export default AccountPreview;
