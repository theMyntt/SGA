import { useState } from "react";
import "./input.scss";

interface Props {
  placeholder?: string;
  type: "string" | "email" | "password" | "number";
  id?: string;
  maxLength?: number;
  minLength?: number;
  className?: string;
  name?: string;
  min?: string;
}

const Input: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>("");

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
        onChange={(e) => setText(e.target.value)}
        min={props.min}
      />
      <p style={{fontSize: 12}}>{props.type == "password" ? text : ""}</p>
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
