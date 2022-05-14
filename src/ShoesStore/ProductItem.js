import React, { Component } from 'react'

export default class ProductItem extends Component {
  // ...

  render() {
    // ...
    let { image, name, price } = this.props.item;

    return (
      <div className="card col-4" style={{ width: '18rem' }}>
        <img style={{
          width: "100%",
          height: "300px",
          objectFit: "contain"
        }} className="card-img-top" src={image}  alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{ name}</h5>
          <p className="card-text">{price} $</p>
          <div>
            <button onClick={() => {
              this.props.handleDetailShoes(this.props.item)
            }} className="btn btn-success mx-2">More detail</button>
            <button onClick={() => {
              this.props.handleCart(this.props.item)
            }}
              className="btn btn-primary mx-2">Add to cart <i class="fa fa-cart-arrow-down"></i></button>
          </div>
        </div>
      </div>
    )
  }
}
