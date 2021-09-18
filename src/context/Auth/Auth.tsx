import React, { FC, useContext, createContext, useState } from "react";
import { AuthState, /*AuthAction*/ initialState } from "./Auth.interface";

export const AuthContext = createContext<AuthState>(initialState);
export const AuthContextProvider: FC = ({ children }) => {
  const [state, setStete] = useState<AuthState>(initialState);

  const reducer = (): void => {
    setStete({ ...state, user: "Mario rossi" });
  };

  return (
    <AuthContext.Provider value={{ ...state, reducer }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthState => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error();
  }
  return context;
};
