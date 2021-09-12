import React, { useState, useRef, useEffect } from "react";
import Props from "./helper/text-field.interface";
import { Container, Input, Label, Icon, Error } from "./TextField.style";

const TextField = (props: Props): JSX.Element => {
  const { label, variant, type, icon, error } = props;
  const { value, onChange } = props;

  const [active, setActive] = useState(false);
  const ref = useRef(null);

  let className = variant || "default";
  if (className !== "filled") {
    if (active && error === undefined) className += " active";
    if (active || value) className += " top";
    if (error !== undefined) className += " error";
  }

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
  return (
    <Container ref={ref} className={className}>
      {variant !== "filled" && <Label>{label}</Label>}
      <Input
        className={className}
        onClick={() => setActive(!active)}
        onChange={(e) => onChange(e.target.value)}
        placeholder={variant === "filled" ? label : ""}
        type={type}
        value={value}
      />
      <Icon>{icon}</Icon>
      <Error>{error}</Error>
    </Container>
  );
};

export default TextField;
