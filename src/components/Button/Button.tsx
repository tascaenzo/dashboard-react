import React from "react";
import { COLOR } from "../../utils/ui-style";
import { Buttun as Btn } from "./Button.style";
import { Props } from "./helper/button.interface";

const Button = (props: Props): JSX.Element => {
  const { color, radius, large, small, icon, label } = props;
  let width = 0, height = 0, fontSize = 0;
  
  if(radius === true){
    width = height = 48;
    fontSize = 20;
    if(large === true){
      width = height = 64;
      fontSize = 28;
    }
    if(small === true){
      width = height = 36;
      fontSize = 16;
    }

  } else {
    width =  100;
    height = 36;
    fontSize = 15;

    if(large === true){
      width =  130;
      height = 48;
      fontSize = 20;

    } 
    if(small === true){
      width =  80;
      height = 30;
      fontSize = 14;
    }
  }

  console.log(width);

  return (
    <Btn 
      color={COLOR.PRIMARY}
      height={`${height}px`} 
      width={`${width}px`}
      fontSize={`${fontSize}px`}
    >
      {icon}
      {label && label}
    </Btn>
  );
};

export default Button;
