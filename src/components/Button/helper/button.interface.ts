export interface Props {
  onClick: () => void;
  color?: "primary" | "secondary" | string;
  variant?: "default" | "filled" | "outlined";
  label?: string;
  radius?: boolean;
  length?: string;
  icon?: JSX.Element;
}
