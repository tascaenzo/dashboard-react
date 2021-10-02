import useCtx from "../ctx";
import { UseContext } from "../ctx.interface";
import { AuthState, /*AuthAction*/ initialState } from "./Auth.interface";

export const useAuthContext = (): UseContext<AuthState, AuthState> => {
  const reducer = (
    state: AuthState,
    action: { type: string; payload: AuthState }
  ): AuthState => {
    switch (action.type) {
      default:
        break;
    }
    return { user: "Mario Rossi" };
  };
  return useCtx<AuthState, AuthState>(initialState, reducer);
};
