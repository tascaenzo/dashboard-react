import React, { useState } from "react";
import TextField from "../../components/TextField";
import { BiUser } from "react-icons/bi";
import "@material/react-button/dist/button.css";

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
import Button from "@material/react-button";
import { COLOR } from "../../utils/ui-style";

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
            />
            <br />
            <Button style={{backgroundColor: COLOR.PRIMARY}} dense={true}>Click Me!</Button>
          </FormContainer>
        </Right>
      </Container>
    </BackgroundContainer>
  );
};

export default Login;
