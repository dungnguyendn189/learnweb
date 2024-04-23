import Styles from "./AddToDo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(Styles);
function AddToDo() {
  return (
    <div className={cx("addtodo-wrapper")}>
      <input className={cx("addtodo-input")} />
      <button className={cx("addtodo-btn")}>Add</button>
    </div>
  );
}

export default AddToDo;
