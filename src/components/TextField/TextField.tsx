import React, { useState, useRef, useEffect } from "react";
import Props from "./helper/text-field.interface";
import { Container, Input, Label, Icon, Error } from "./TextField.style";

const TextField = (props: Props): JSX.Element => {
  const { label, variant, type, icon, error } = props;
  const { value, onChange } = props;

  const [active, setActive] = useState(false);
  const ref = useRef(null);

  let className = variant || "default";
  if (active && error === undefined) className += " active";
  if (active || value) className += " top";
  if (error !== undefined) className += " error";

  useEffect(() => {
    const checkIfClickedOutside = () => {
      if (active && ref.current) {
        setActive(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [active]);

  switch (variant) {
    case "filled":
      return (
        <Container ref={ref} className="filled">
          <Input
            className="filled"
            onChange={(e) => onChange(e.target.value)}
            placeholder={label}
            type={type}
            value={value}
          />
          <Icon>{icon}</Icon>
          <Error>{error}</Error>
        </Container>
      );
    default:
      return (
        <Container ref={ref} className={className}>
          <Label className={className}>{label}</Label>
          <Input
            onClick={() => setActive(!active)}
            onChange={(e) => onChange(e.target.value)}
            type={type}
            value={value}
          />
          <Icon>{icon}</Icon>
          <Error>{error}</Error>
        </Container>
      );
  }
};

export default TextField;
