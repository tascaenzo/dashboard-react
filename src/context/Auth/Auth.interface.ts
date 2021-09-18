export interface AuthState {
  reducer: () => void | null
  user: string;
}

export const initialState: AuthState = {
  reducer: () => null,
  user: "enzo tasca",
};

export enum AuthAction {
  SET_TOKE,
}
