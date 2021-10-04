export type AuthState = {
  user: string | null;
  token: string | null;
  refreshToken: string | null;
};

export const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
};

export interface LoginInterface {
  email: string;
  password: string;
}

export enum AuthAction {
  SET_TOKE = "SET_TOKE",
  REFRESH_TOKEN = "REFRESH_TOKEN",
}
