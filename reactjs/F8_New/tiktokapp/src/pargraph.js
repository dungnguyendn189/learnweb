import { ThemeContext } from "./ThemeContex";
import { useContext } from "react";

function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <h3 className={context.theme}>
      Tôi là nguyễn Đức Dũng , Tôi đã quịt thầy một mớ tiền
    </h3>
  );
}

export default Paragraph;
