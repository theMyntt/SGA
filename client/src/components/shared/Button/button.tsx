import "./button.scss"

interface Props {
  children: string;
  className?: string;
  type: "submit" | "button";
  id?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button
      className={`custom-button ${props.className}`}
      type={props.type}
      id={props.id}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  children: undefined,
  className: undefined,
  type: "button",
  id: undefined,
  onClick: undefined,
}

export default Button;
