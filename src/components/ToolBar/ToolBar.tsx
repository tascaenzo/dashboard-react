import React from "react";
import { BiListUl, BiGridAlt, BiArrowBack } from "react-icons/bi";
import { ToolBarContainer, Item } from "./ToolBar.style";
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
        {/* <BiArrowBack size={24} /> */}
        <Button radius={true} small={true} label={"T"} />
        <Button radius={true} label={"T"}/>
        <Button radius={true} large={true} label={"T"}/>

      </Item>
      <Item>
        <IconSwitch {...p} />
      </Item>
    </ToolBarContainer>
  );
};

export default ToolBar;
