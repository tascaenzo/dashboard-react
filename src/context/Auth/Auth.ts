import useCtx from "../ctx";
import { ActionInterface, UseContext } from "../ctx.interface";

import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../api/auth/auth.mutation";
import SessionModel from "../../models/session.model";

import {
  AuthState,
  AuthAction,
  initialState,
  LoginInterface,
} from "./Auth.interface";

export const useAuthContext = (): UseContext<AuthState, LoginInterface> => {
  const [signIn, { data, loading, error }] = useMutation<SessionModel>(SIGN_IN);

  const reducer = (
    state: AuthState,
    { type, payload }: ActionInterface<LoginInterface>
  ): AuthState => {
    switch (type) {
      case AuthAction.SET_TOKE:
        signIn({
          variables: {
            signInSignInUserInput: {
              email: payload.email,
              password: payload.password,
            },
          },
        });
        break;

      case AuthAction.REFRESH_TOKEN:
        break;
    }
    return state;
  };
  return useCtx<AuthState, LoginInterface>(initialState, reducer);
};
