import React, { Component } from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import Category from './components/Category';
import Sections from './components/Sections';
import './assets/styles/app.css';


const errorLink = onError(({ graphqlErrors, networkError}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`graphql error ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({uri: 'http://localhost:4000/'})
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});


export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {" "}
        <Sections />
      </ApolloProvider>
      
    )
  }
}


