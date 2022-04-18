import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/​graphql",
  });
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route path="/charactor/details" component={Details} />
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
