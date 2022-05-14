import React, { Component } from 'react'
import './ModalCart.css'

const INCREASE_VAL = 1;
const DECREASE_VAL = -1;

export default class ModalCart extends Component {
  // ...
  renderCart = () => {
    // ...

    return this.props.cart.map(item => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} alt="" style={{
              width: "30%",
              height: "30%",
              objectFit: "contain"
            }} />
          </td>
          <td>{item.price}</td>
          <td className='d-flex justify-content-center align-items-center'>
            <button onClick={() => {
              this.props.handleChangeQuantity(item.id, INCREASE_VAL)
            }} className='btn btn-success mx-2'>+</button>
            {item.soLuong}
            <button onClick={() => {
              this.props.handleChangeQuantity(item.id, DECREASE_VAL)
            }} className='btn btn-danger mx-2'>-</button>
          </td>
        </tr>
      )
    })
  }

  getQuantity = () => {
    const initialValue = 0;
    return this.props.cart.reduce((tong, item) => {
      return (tong += item.soLuong)
    }, initialValue);
  }

  render() {
    // ...

    return (
      <div className='mt-5'>
        <button id='modalCart-btn' style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: 2,
          textAlign: "center"
        }} type="button" className="btn btn-primary text-center" data-toggle="modal" data-target="#exampleModal">
          <i style={{
            padding: 0,
            margin: 0
          }} class="fa fa-cart-arrow-down"></i>
          <span style={{
            marginBottom: "5px"
          }} className='mx-2'>[{this.getQuantity()}]</span>
        </button>
        <div className="modal fade mt-5" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div style={{ maxWidth: "60vw" }} className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Product List</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true"></span>
                </button>
              </div>
              <div className="modal-body">
                {/* render */}
                <table className='table'>
                  <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </thead>
                  <tbody>
                    {this.renderCart()}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
