import React, { Component } from 'react'

export default class ModalDetailShoes extends Component {
  // ...

  render() {
    // ...
    let { image, name, quantity, price, shortDescription } = this.props.detailShoes;

    return (
      <div className='border border-primary rounded mt-5'>
        <h2 className='text-success text-center mt-5'>Product Detail</h2>
        <div className='row mt-5'>
          <img
            style={{
              width: "100%",
              height: "400px"
            }}
            className='col-4' src={image} alt="" />
          <div className='col-7'>
            <table className='table'>
              <tr>
                <td>Name</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>{quantity}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{price} $</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{shortDescription}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
