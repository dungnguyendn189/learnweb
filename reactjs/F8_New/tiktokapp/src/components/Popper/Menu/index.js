import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as PoperWrapper } from '~/components/Popper';
const cx = classNames.bind(styles);

function Menu({ Children }) {
    return (
        <Tippy
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('content')} tabIndex="-1" {...attrs}>
                    <PoperWrapper></PoperWrapper>
                </div>
            )}
        >
            {Children}
        </Tippy>
    );
}
export default Menu;
