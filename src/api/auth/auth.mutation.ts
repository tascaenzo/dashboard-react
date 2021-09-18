import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation SignInMutation($signInSignInUserInput: SignInUserInput!) {
    signIn(signInUserInput: $signInSignInUserInput) {
      token
      refreshToken
    }
  }
`;
