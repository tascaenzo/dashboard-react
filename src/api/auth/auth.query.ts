import { gql } from "@apollo/client";

export const GET_SESSION_BY_TOKEN = gql`
  query GetSessionByToken($token: String!) {
    getSessionByToken(token: $token) {
      token
      refreshToken
      user {
        id
        name
        surname
        role
      }
    }
  }
`;
