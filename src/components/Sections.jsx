import React, { Component, Fragment } from 'react'
import { Query } from '@apollo/client/react/components';
import GET_PRODUCTS from '../GraphQl/Queries';
import NavBar from './NavBar';
import Category from './Category';


export default class Sections extends Component {
  render() {
   return (
    <Fragment>
      <Query query={GET_PRODUCTS}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading...</h4>;
          if (error) return <p>Error :(</p>;

          console.log(data);
          
          return <Fragment>
            <NavBar data={data} />
            <Category data={data} />
          </Fragment>

        }}
      </Query>
      </Fragment>


   )
  }
}
