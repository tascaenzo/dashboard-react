export default interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  variant?: "default" | "filled" | "outlined";
  type?: string;
  icon?: JSX.Element;
  error?: string;
}
