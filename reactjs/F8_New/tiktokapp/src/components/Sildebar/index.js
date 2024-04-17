import classNames from 'classnames/bind';
import styles from './Sildebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
  HomeIcon,
  UserGroupIcon,
  LiveIcon,
  HomeActiveIcon,
  UserGroupActiveIcon,
  LiveActiveIcon,
} from '~/components/icons';
import SuggestAccount from '../SuggetAccount';
const cx = classNames.bind(styles);

function Slidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>
      <SuggestAccount label="Các tài khoản đề xuất" />
      {/* <SuggestAccount label="Flowwing" /> */}
    </aside>
  );
}

export default Slidebar;
