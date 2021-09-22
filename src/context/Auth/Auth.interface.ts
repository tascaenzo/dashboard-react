export type AuthState = {
  user: string;
}

export const initialState: AuthState = {
  user: "enzo tasca",
};

export enum AuthAction {
  SET_TOKE,
}
