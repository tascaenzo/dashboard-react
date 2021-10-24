import React, { FC, useContext, createContext, useReducer } from "react";
import { AuthState, initialState } from "./Auth.interface";

function useAuthContext (): FC {
  const ctx = createContext<AuthState>(initialState);

  const Provider = (): FC => {
    return <div></div>
  };

  return Provider;
};

export default useAuthContext;
