import useCtx from "../ctx";
import { UseContext } from "../ctx.interface";
import { AuthState, /*AuthAction*/ initialState } from "./Auth.interface";

export const useAuthContext = (): UseContext<AuthState> => {
  const reducer = (state: AuthState, action: { type: string }):AuthState => {
    switch (action.type) {
      default:
        break;
    }
    return { user: "Mario Rossi" };
  };
  return useCtx<AuthState>(initialState, reducer);
};

/* 
export const useAuthContext = (): UseContext<AuthState> => {
  const AuthContext = createContext<CreateContext<AuthState>>({
    state: initialState,
    dispatch: () => null,
  });

  const reducer = (state: AuthState, action: { type: string }) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const Provider: FC = ({ children }) => (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );

  return { ...useContext(AuthContext), Provider };
}; */
