import { IconType } from "react-icons/lib";

export interface Props {
  color?: "PRIMARY" | "SECONDARY";
  label?: string;
  radius?: boolean;
  large?: boolean;
  small?: boolean;
  //outline?: boolean;
  icon?: JSX.Element;
}
