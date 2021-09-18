import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Router } from "./components/Router";
import client from "./api/apollo-client";
import { AuthContextProvider } from "./context/Auth";

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ApolloProvider>
  );
}

export default App;
