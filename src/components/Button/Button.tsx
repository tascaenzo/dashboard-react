import React from "react";
import { COLOR } from "../../utils/ui-style";
import { Button as Btn, ButtonRadius } from "./Button.style";
import { Props } from "./helper/button.interface";

const Button = (props: Props): JSX.Element => {
  const { color, radius, icon, label, variant, onClick } = props;

  let c = color || COLOR.PRIMARY;
  if (color === "primary") c = COLOR.PRIMARY;
  if (color === "primary") c = COLOR.SECONDARY;

  if (radius) {
    return (
      <ButtonRadius className={variant} color={c} onClick={onClick}>
        {icon}
      </ButtonRadius>
    );
  }

  return (
    <Btn className={variant} color={c} onClick={onClick}>
      {label || icon}
    </Btn>
  );
};

export default Button;
