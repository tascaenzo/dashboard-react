import { gql, useQuery } from "@apollo/client";

const GET_POSTS = gql`
  query Query {
    users {
      id
    }
  }
`;

export const useGetPosts = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  return { loading, error, data };
};
