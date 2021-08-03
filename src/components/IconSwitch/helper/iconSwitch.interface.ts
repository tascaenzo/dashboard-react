export interface IconSwitchItems {
  icon: JSX.Element;
  value: number;
}

export interface Props {
  items: IconSwitchItems[];
  selected: number;
  onChange: (value: number) => void;
}
