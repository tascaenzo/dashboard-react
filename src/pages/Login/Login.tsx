import React, { useState } from "react";
import TextField from "../../components/TextField";
import { BiUser, BiLockAlt } from "react-icons/bi";

import {
  BackgroundContainer,
  Container,
  CircleBottom,
  CircleTop,
  Left,
  Right,
  LoginImg,
  FormContainer,
  AvatarConainer,
} from "./Login.style";
import Avatar from "../../utils/svg/Avatar";
import { Button } from "../../components/Button";

const Login = (): JSX.Element => {
  const [email, setEmail] = useState("");
  return (
    <BackgroundContainer>
      <CircleBottom />
      <CircleTop />
      <Container>
        <Left>
          <LoginImg />
        </Left>
        <Right>
          <FormContainer>
            <AvatarConainer>
              <Avatar />
            </AvatarConainer>
            <TextField
              value={email}
              onChange={(value) => setEmail(value)}
              label="Email"
              variant="filled"
              icon={<BiUser />}
            />
            <TextField
              value={email}
              onChange={(value) => setEmail(value)}
              label="Password"
              variant="filled"
              type="password"
              icon={<BiLockAlt type="solid" />}
            />
            <br />
            <Button onClick={() => console.log("Click")} label="Accedi" />
          </FormContainer>
        </Right>
      </Container>
    </BackgroundContainer>
  );
};

export default Login;
