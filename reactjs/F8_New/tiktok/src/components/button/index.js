import clsx from "clsx";
import styles from "./button.module.scss";

function Button({ primary }) {
  const classes = clsx(styles.btn, {
    [styles.primary]: primary,
    "d-flex": false,
  });
  return (
    <div>
      <button className={classes}>Click Me</button>
    </div>
  );
}

export default Button;
