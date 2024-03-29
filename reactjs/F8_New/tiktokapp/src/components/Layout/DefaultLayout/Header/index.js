import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import imgaes from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisVertical,
  faEarthAmericas,
  faCircleQuestion,
  faKeyboard,
  faUser,
  faCoins,
  faGear,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes';
import Image from '~/components/Image';
import { UploadIcon, LiveActiveIcon, MessageIcon } from '~/components/icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';

const cx = classNames.bind(styles);
const MENU_ICON = [
  {
    icon: <FontAwesomeIcon icon={faEarthAmericas} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and Help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts',
  },
];

function Header() {
  const currentUser = true;
  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@tanlon',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get Coin',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Setting',
      to: '/setting',
    },
    ...MENU_ICON,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log Out',
      to: '/feedback',
      separet: true,
    },
  ];
  console.log(userMenu);
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={routesConfig.home} className={cx('logo-link')}>
          <img src={imgaes.logo} alt="tiktok"></img>
        </Link>
        <Search />
        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon className={cx('btn-icon')} />
                  <LiveActiveIcon className={cx('btn-icon')} />
                  <MessageIcon className={cx('btn-icon')} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Login</Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ICON}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/499ea773799dcb1f04598b6ba4064942~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709283600&x-signature=eTcBKiWDcvBPLrS7wm%2BTQERi3Io%3D"
                className={cx('user-avatar')}
                alt="Nguyễn Đức Dũng"
                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
              />
            ) : (
              <>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
