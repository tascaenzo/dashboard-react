import React, { useState, useEffect } from "react";
import TextField from "../../components/TextField";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { Button } from "../../components/Button";
import Avatar from "../../utils/svg/Avatar";

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
  Footer,
  BtnContainer,
} from "./Login.style";

import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../api/auth/auth.mutation";
import SessionModel from "../../models/session.model";

const Login = (): JSX.Element => {
  const initialState = { error: "", value: "" };
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);
  const [signIn, { data, loading, error }] = useMutation<SessionModel>(SIGN_IN);

  useEffect(() => {
    if (error === undefined && !loading && !!data) {
      console.log(data);
    }
  }, [data, error, loading]);

  const submit = () => {
    setEmail({ ...email, error: "" });
    setPassword({ ...password, error: "" });
    let check = true;

    if (email.value === "") {
      setEmail({ ...email, error: "Campo obligatorio" });
      check = false;
    }
    if (password.value === "") {
      setPassword({ ...password, error: "Campo obligatorio" });
      check = false;
    }
    if (!check) return;

    signIn({
      variables: {
        signInSignInUserInput: {
          email: email.value,
          password: password.value,
        },
      },
    });
  };

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
              value={email.value}
              onChange={(value) => setEmail({ ...email, value })}
              error={email.error}
              label="Email"
              variant="filled"
              icon={<BiUser />}
            />
            <TextField
              value={password.value}
              error={password.error}
              onChange={(value) => setPassword({ ...password, value })}
              label="Password"
              variant="filled"
              type="password"
              icon={<BiLockAlt type="solid" />}
            />
            <BtnContainer>
              <Button onClick={submit} variant="filled" label="Accedi" />
            </BtnContainer>
          </FormContainer>
          <Footer>Web Master Enzo Tasca</Footer>
        </Right>
      </Container>
    </BackgroundContainer>
  );
};

export default Login;
