import "./input.scss";

interface Props {
  placeholder?: string;
  type: "string" | "email" | "password" | "number";
  id?: string;
  maxLength?: number;
  minLength?: number;
  className?: string;
  name?: string;
}

const Input: React.FC<Props> = (props) => {
  return (
    <div className="custom-input-div">
      <input
        type={props.type}
        maxLength={props.maxLength}
        minLength={props.minLength}
        className={`custom-input ${props.className}`}
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
      />
    </div>
  );
};

Input.defaultProps = {
  placeholder: "",
  type: "string",
  maxLength: undefined,
  minLength: undefined,
  className: undefined,
};

export default Input;
