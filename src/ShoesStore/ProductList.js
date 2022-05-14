import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  // ...
  renderProductList = () => {
    // ...
    

    return this.props.dataShoes.map((item) => {
      return (
        <ProductItem
          handleCart={this.props.handleCart}
          handleDetailShoes={this.props.handleDetailShoes}
          item = {item}
        />
      )
    });
  }

  render() {
    // ...

    return (
      <div className='row'>{this.renderProductList()}</div>
    )
  }
}
