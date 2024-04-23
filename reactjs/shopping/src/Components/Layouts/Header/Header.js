import styles from "./Header.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Header() {
  return <div className={cx("header")}>Header</div>;
}

export default Header;
