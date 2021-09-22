import React, { FC, useContext, createContext, useReducer } from "react";
import { UseContext, CreateContext } from "./ctx.interface";

function useCtx<State>(
  initialState: State,
  reducer: (state: State, action: { type: string }) => State
): UseContext<State> {
  const Context = createContext<CreateContext<State>>({
    state: initialState,
    dispatch: () => null,
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const Provider: FC = ({ children }) => (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );

  return { ...useContext(Context), Provider };
}

export default useCtx;
