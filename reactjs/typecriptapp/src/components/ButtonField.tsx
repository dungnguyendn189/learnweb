import { Children, ReactNode } from "react";
import { IcSpinner } from "../assets/icon/IcSpinner";

type Props = {
  loading?: boolean;
  children?: ReactNode;
};

const ButtonField = ({ loading, children }: Props) => {
  return (
    <div className="btn-main">
      {!loading ? (
        children
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            columnGap: ".5rem",
          }}
        >
          <IcSpinner width="32px" height="32px" />
          {children}
        </div>
      )}
    </div>
  );
};

export default ButtonField;
