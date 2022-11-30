import React, { Component } from 'react'
import '../assets/styles/category.css'
import ProductCartIcon from '../assets/images/Circle Icon.png'


export default class Category extends Component {
  render() {
    return (
      this.props.data.categories.map(({ name, products }) => (
        <div className="category">
          <h2 className='categoryTitle'>{name}</h2>
          <div className="productDisplayList">
            {products.map(({ name, price, gallery, inStock
            }) => (
              <div className={`productDisplayItem ${inStock? "" : "outstock"}`}>
                  <img className='productImage' src={gallery[0]} alt="Product Cart Icon" />
                <div className="">
                  <h3 className='productItemName'>{name}</h3>
                  <p>{price}</p>
                  {
                    inStock? "" : <p className='outOfStock'>OUT OF STOCK</p>
                  }
                  <img className='productItemCartIcon' src={ProductCartIcon} alt="product cart"/>
                </div>
              </div>
            ))}
          </div>
        </div>
                
      ))
   
    )
  }
}
