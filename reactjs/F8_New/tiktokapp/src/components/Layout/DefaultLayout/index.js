import Header from './Header';
import Slidebar from './Sildebar';
import tyles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

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
export default DefaultLayout;
