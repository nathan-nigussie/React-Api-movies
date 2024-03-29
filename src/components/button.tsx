interface Props {
  children: string;
  color?: "primary" | "danger" | "success";
  onClick: () => void;
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <div>
      {" "}
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
