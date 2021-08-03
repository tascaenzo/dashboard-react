import React, { ReactElement, useState } from "react";
import { SwitchContainer, SwitchIconItem } from "./IconSwitch.style";
import { Props } from "./helper/iconSwitch.interface";

const IconSwitch = ({ items, selected, onChange }: Props): ReactElement => {
  const [itemSelected, setItemSelected] = useState(selected);

  const clickHendler = (value: number) => {
    setItemSelected(value);
    onChange(value);
  };

  return (
    <SwitchContainer>
      {items.map((item) => (
        <SwitchIconItem
          key={item.value}
          className={itemSelected == item.value ? "selected" : ""}
          onClick={() => clickHendler(item.value)}
        >
          {item.icon}
        </SwitchIconItem>
      ))}
    </SwitchContainer>
  );
};

export default IconSwitch;
