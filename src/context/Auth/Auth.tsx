import React, { FC, useContext, createContext, useReducer } from "react";
import { AuthState, initialState } from "./Auth.interface";
type Props = { children?: JSX.Element | JSX.Element[] };

function useAuthContext() {
  const ctx = createContext<AuthState>(initialState);

  const Provider: FC<Props> = ({ children }: Props) => {
    return <ctx.Provider value={initialState}>{children}</ctx.Provider>;
  };

  return { Provider };
}

export default useAuthContext;
