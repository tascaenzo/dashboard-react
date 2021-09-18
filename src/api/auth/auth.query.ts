import { gql } from "@apollo/client";

const SIGN_IN = gql`
  mutation SignIn($signInSignInUserInput: SignInUserInput!) {
    signIn(signInUserInput: $signInSignInUserInput) {
      token
      refreshToken
      refreshNumber
      refreshedAt
      createdAt
      userAgent
      ip
      expiredAt
    }
  }
`;
