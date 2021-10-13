import SessionModel from "../../models/session.model";
import useCtx from "../ctx";
import { ActionInterface, UseContext } from "../ctx.interface";

import { AuthState, AuthAction, initialState } from "./Auth.interface";

export const useAuthContext = (): UseContext<AuthState, SessionModel> => {
  const reducer = (
    state: AuthState,
    { type, payload }: ActionInterface<SessionModel>
  ): AuthState => {
    let token: string | null = null;
    let refreshToken: string | null = null;
    switch (type) {
      case AuthAction.SET_SESSION:
        localStorage.clear();
        localStorage.setItem("token", payload.token);
        localStorage.setItem("refresh_token", payload.refreshToken || "");

        return {
          user: payload.user,
          token: payload.token,
          refreshToken: payload.refreshToken || null,
          isAuthenticate: true,
        };

      case AuthAction.INIT_SESSION:
        token = localStorage.getItem("token");
        refreshToken = localStorage.getItem("refresh_token");
        return {
          user: payload.user,
          token,
          refreshToken,
          isAuthenticate: token !== null,
        };
    }
    return state;
  };
  return useCtx<AuthState, SessionModel>(initialState, reducer);
};
