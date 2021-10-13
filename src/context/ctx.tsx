import React, { FC, useContext, createContext, useReducer } from "react";
import { UseContext, CreateContext } from "./ctx.interface";

function useCtx<State, Payload>(
  initialState: State,
  reducer: (state: State, action: { type: string; payload: Payload }) => State
): UseContext<State, Payload> {
  const [state, dispatch] = useReducer(reducer, initialState);
  const Context = createContext<CreateContext<State, Payload>>({
    state,
    dispatch,
  });

  const Provider: FC = ({ children }) => (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );

  return { ...useContext(Context), Provider };
}

export default useCtx;