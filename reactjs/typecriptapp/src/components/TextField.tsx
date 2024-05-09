type Props = {
  value?: string;
  width?: string;
  height?: string;
  onChange?: (value: string) => void;
  placeholder: string;
};
const TextField = ({
  onChange,
  width = "100%",
  height = "20px",
  ...props
}: Props) => {
  return (
    <input
      {...props}
      className="text-field"
      style={{ width, height }}
      onChange={(e) => onChange && onChange(e.target.value)}
    />
  );
};

export default TextField;
