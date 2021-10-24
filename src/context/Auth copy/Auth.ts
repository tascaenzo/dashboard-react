import React from "react";
import SessionModel from "../../models/session.model";
import useCtx from "../ctx";
import { ActionInterface, UseContext } from "../ctx.interface";
import { useMutation, useQuery } from "@apollo/client";

import { AuthState, AuthAction, initialState } from "./Auth.interface";
import { GET_SESSION_BY_TOKEN } from "../../api/auth/auth.query";

export const useAuthContext = (): UseContext<AuthState, SessionModel | undefined> => {
  
  const useGetSession = () => {
    return useQuery(GET_SESSION_BY_TOKEN,{
      variables: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjpbIkFETUlOIl0sImlkIjoiNjEyODE2ODU5ODI5OTQwZDkxMWQxNjA1Iiwia2V5IjoiMTYzNDE1Nzk5ODQzNCIsImlhdCI6MTYzNDE1Nzk5OCwiZXhwIjoxNjM0MjAxMTk4fQ.GdoXUxi7j3XmXlstX3hF66EjcFooOHcWza3QUGswfsg" },
    });
  }
  
  const reducer = (
    state: AuthState,
    { type, payload }: ActionInterface<SessionModel | undefined>
  ): AuthState => {
    let token: string | null = null;
    let refreshToken: string | null = null;
    switch (type) {
      case AuthAction.SET_SESSION:
        if (payload === undefined) break;
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
        return state
    }
    return state;
  };
  return useCtx<AuthState, SessionModel | undefined>(initialState, reducer);
};
