import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { Router } from './components/Router';
import client from './utils/apollo-client';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
