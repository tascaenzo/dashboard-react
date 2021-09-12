export interface Props {
  onClick: () => void;
  color?: "primary" | "secondary" | string;
  variant?: "default" | "filled" | "outlined";
  label?: string;
  radius?: boolean;
  icon?: JSX.Element;
}
