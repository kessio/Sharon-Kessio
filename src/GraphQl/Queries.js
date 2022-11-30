import { gql } from '@apollo/client'

const GET_PRODUCTS = gql`
query {
  categories{
    name
    products{
      id
      name
      inStock
      gallery
      prices{
        amount
        currency{
          symbol
        }
      }
      
    }
    
  }
  currencies{
    symbol
  }
}
`
export default GET_PRODUCTS;