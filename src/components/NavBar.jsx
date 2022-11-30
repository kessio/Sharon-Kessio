import React, { Component } from 'react';
import '../assets/styles/navbar.css';
import BrandIcon from '../assets/images/Brand icon.png';


export default class NavBar extends Component {
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
            <div className="nav-group">
                <span className="nav-item active">WOMEN</span>
                <span className="nav-item">MEN</span>
                <span className="nav-item">KIDS</span>
            </div>
            <div className="nav-group">
                <span className="logo"><img src={BrandIcon} alt="logo icon" /></span>
            </div>
            <div className="nav-group">
                <span className="nav-item">Cart</span> 
                    <select className='nav-item'>
                       {this.props.data.currencies.map(({ symbol }) => (
                      <option className='nav-item-option' value={symbol}>{symbol}</option>
                      ))
                    }
                    </select>
            </div>
        </div>
      </nav>
    )
   
  }
}
