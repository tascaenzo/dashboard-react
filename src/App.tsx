import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Router } from "./components/Router";
import client from "./api/apollo-client";
import useAuthContext from "./context/Auth";

function App(): JSX.Element {
  const { Provider } = useAuthContext();
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Router />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
