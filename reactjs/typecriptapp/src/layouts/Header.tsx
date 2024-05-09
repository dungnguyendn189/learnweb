import ButtonField from "../components/ButtonField";
import TextField from "../components/TextField";

const Header = () => {
  return (
    <div className="flex-basic-between" style={{ padding: "1.5rem 4rem" }}>
      <div style={{ fontSize: "40px", fontWeight: "1000" }}>Pizza Dũng Mập</div>
      <TextField placeholder="Enter Search" width="200px" />

      <ButtonField>Create Pizza</ButtonField>
    </div>
  );
};

export default Header;
