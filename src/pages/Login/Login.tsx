import React, { useState, useEffect } from "react";
import TextField from "../../components/TextField";
import { BiUser, BiLockAlt } from "react-icons/bi";
import { Button } from "../../components/Button";
import Avatar from "../../utils/svg/Avatar";
import useAuthContext, { AuthAction } from "../../context/Auth";

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

import { useMutation, useQuery } from "@apollo/client";
import { GET_SESSION_BY_TOKEN } from "../../api/auth/auth.query";
import { SIGN_IN } from "../../api/auth/auth.mutation";
import SessionModel from "../../models/session.model";

const Login = (): JSX.Element => {
  const initialState = { error: "", value: "" };
  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState(initialState);

  const { dispatch, state } = useAuthContext();
  const [signIn, { data, loading, error }] =
    useMutation<{ signIn: SessionModel }>(SIGN_IN);

  const q = useQuery(GET_SESSION_BY_TOKEN,{
    variables: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkFETUlOIl0sImlkIjoiNjEyODE2ODU5ODI5OTQwZDkxMWQxNjA1Iiwia2V5IjoiMTYzNDE1Nzk5ODQzNCIsImlhdCI6MTYzNDE1Nzk5OCwiZXhwIjoxNjM0MjAxMTk4fQ.GdoXUxi7j3XmXlstX3hF66EjcFooOHcWza3QUGswfsg" },
  });

  console.log(q.data)
  useEffect(() => {
    if (error === undefined && !loading && !!data) {
      dispatch({ type: AuthAction.SET_SESSION, payload: data.signIn });
    }
  }, [data, dispatch, error, loading]);

  useEffect(() => console.log(state), [state]);

  const submit = () => {
    /* setEmail({ ...email, error: "" });
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
    if (!check) return; */

    signIn({
      variables: {
        signInSignInUserInput: {
          email: "enzotasca.et@gmail.com",
          password: "password",
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
