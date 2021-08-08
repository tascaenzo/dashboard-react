import React from "react";
import { BiListUl, BiGridAlt, BiPlus, BiSearchAlt } from "react-icons/bi";
import { ToolBarContainer, Item, SerchBarr } from "./ToolBar.style";
import { Props as SwitchProps } from "../../components/IconSwitch/helper/iconSwitch.interface";
import IconSwitch from "../IconSwitch/IconSwitch";
import { Button } from "../Button";

const p: SwitchProps = {
  items: [
    {
      icon: <BiListUl />,
      value: 1,
    },
    {
      icon: <BiGridAlt />,
      value: 2,
    },
  ],
  selected: 1,
  onChange: (value) => {
    console.log(value);
  },
};

const ToolBar = (): JSX.Element => {
  return (
    <ToolBarContainer>
      <Item>
        <Button radius={true} icon={<BiPlus size={26} />}/>
        <div>
          <SerchBarr placeholder="test" />
          <BiSearchAlt />
        </div>
      </Item>
      <Item>
        <IconSwitch {...p} />
      </Item>
    </ToolBarContainer>
  );
};

export default ToolBar;