import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import React, { FC } from 'react';
import { useGetPosts } from '../hook/useLogin';
 
const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/graphql",
  cache: new InMemoryCache(),
});


export const GenericPage: FC = () => {
  const { data, loading, error } =  useGetPosts();
  if(loading) return <h1>Loading</h1>
  console.log(data?.users);
  return <h1>Generic Page</h1>
}