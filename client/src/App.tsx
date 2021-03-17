import React from 'react';
import {ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from} 
from '@apollo/client';
import { onError } from '@apollo/client/link/error'
import './App.css';
import GetAllTodos from './Components/GetTodos';

const errorLink = onError(({ graphQLErrors, networkError}) => {
  if(graphQLErrors) {
    graphQLErrors.map(({message,locations,path}) => {
      alert(`Graphql Error: ${message}`);
      return null;
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({uri:"http://localhost:4000/graphql"})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});


function App() {
  return (
      <ApolloProvider client={client}>
        {" "}
        <GetAllTodos/>
      </ApolloProvider>
    );
}

export default App;
