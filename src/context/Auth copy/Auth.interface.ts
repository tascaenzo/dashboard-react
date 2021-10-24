import UserModel from "../../models/user.model";

export type AuthState = {
  user: UserModel | null;
  token: string | null;
  refreshToken: string | null;
  isAuthenticate: boolean | null;
};

export const initialState: AuthState = {
  user: null,
  token: null,
  refreshToken: null,
  isAuthenticate: null
};

/* export interface LoginInterface {
  email: string;
  password: string;
} */

export enum AuthAction {
  INIT_SESSION = "INIT_SESSION",
  SET_SESSION = "SET_TOKE",
}
