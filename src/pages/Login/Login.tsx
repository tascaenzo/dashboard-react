import React from "react";
import {
  BackgroundContainer,
  Container,
  CircleBottom,
  CircleTop,
  Left,
  Right,
  LoginImg,
} from "./Login.style";

const Login = (): JSX.Element => {
  return (
    <BackgroundContainer>
      <CircleBottom />
      <CircleTop />
      <Container>
        <Left>
          <LoginImg />
        </Left>
        <Right />
      </Container>
    </BackgroundContainer>
  );
};

export default Login;
