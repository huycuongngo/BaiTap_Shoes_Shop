import React, { Component } from 'react'
import { dataShoes } from './dataShoes';
import ModalCart from './ModalCart';
import ModalDetailShoes from './ModalDetailShoes';
import ProductList from './ProductList';

export default class ShoesStore extends Component {
  // ...
  constructor(props) {
    super(props);
    this.state = {
      dataShoes: dataShoes,
      detailShoes: dataShoes[0],
      cart: []
    }
  }

  handleDetailShoes = (product) => {
    this.setState({ detailShoes: product })
  }

  handleCart = (product) => {
    // ...
    let cloneCart = [...this.state.cart];
    let index = this.state.cart.findIndex((item) => {
      return item.id === product.id;
    })
    if (index === -1) {
      let cloneProduct = { ...product, soLuong: 1 };
      cloneCart.push(cloneProduct);
    } else {
      cloneCart[index].soLuong++;
    }

    this.setState({ cart: cloneCart })

    // return()
  }

  handleChangeQuantity = (idProduct, value) => {
    // ...
    let cloneCart = [...this.state.cart];
    let index = this.state.cart.findIndex(item => {
      // ...
      return item.id === idProduct;
    })
    if (index !== -1) {
      cloneCart[index].soLuong += value;
      cloneCart[index].soLuong === 0 && cloneCart.splice(index, 1)
    }
    this.setState({
      cart: cloneCart
    })

    // return()
  }

  render() {
    // ...

    return (
      <div>
        <h2 className='text-center p-5'>Shoes Shop</h2>
        <ModalCart
          handleChangeQuantity={this.handleChangeQuantity}
          cart={this.state.cart}
        />
        <ProductList
          detailShoes={this.state.detailShoes}
          handleCart={this.handleCart}
          handleDetailShoes={this.handleDetailShoes}
          dataShoes={this.state.dataShoes}
        />

        <ModalDetailShoes detailShoes={this.state.detailShoes} />
      </div>
    )
  }
}


// product item la children props cua productlist



// import React, { Component } from 'react'
// import { dataShoes } from './dataShoes';
// import ModalCart from './ModalCart';
// import ModalDetailShoes from './ModalDetailShoes';
// import ProductList from './ProductList';

// export default class ShoesStore extends Component {
//   // ...
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataShoes: dataShoes,
//       detailShoes: dataShoes[0],
//       cart: []
//     }
//   }

//   handleDetailShoes = (product) => {
//     this.setState({ detailShoes: product })
//   }

//   handleCart = (product) => {
//     // ...
//     let cloneCart = [...this.state.cart];
//     let index = this.state.cart.findIndex((item) => {
//       return item.id === product.id;
//     })
//     if (index === -1) {
//       let cloneProduct = { ...product, soLuong: 1 };
//       cloneCart.push(cloneProduct);
//     } else {
//       cloneCart[index].soLuong++;
//     }

//     this.setState({ cart: cloneCart })

//     // return()
//   }

//   handleChangeQuantity = (idProduct, value) => {
//     // ...
//     let cloneCart = [...this.state.cart];
//     let index = this.state.cart.findIndex(item => {
//       // ...
//       return item.id === idProduct;
//     })
//     if (index !== -1) {
//       cloneCart[index].soLuong += value;
//       cloneCart[index].soLuong === 0 && cloneCart.splice(index, 1)
//     }
//     this.setState({
//       cart: cloneCart
//     })

//     // return()
//   }

//   render() {
//     // ...

//     return (
//       <div>
//         <h2 className='text-center p-5'>Shoes Shop</h2>
//         <ModalCart
//           handleChangeQuantity={this.handleChangeQuantity}
//           cart={this.state.cart}
//         />
//         <ProductList
//           handleCart={this.handleCart}
//           handleDetailShoes={this.handleDetailShoes}
//           dataShoes={this.state.dataShoes}
//         />
//         <ModalDetailShoes
//           detailShoes={this.state.detailShoes}
//         />
//       </div>
//     )
//   }
// }


// // product item la children props cua productlist
