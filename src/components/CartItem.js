import React, { Component } from "react";
import { connect } from "react-redux";
//IMPORT ACTION
import { delFromCart,addToCart,subFromCart } from "./../actions/index";

class CartItem extends Component {
  render() {
    let { product, qty } = this.props.obj;
    let totalPrice = product.price * qty;

    return (
      <tr>
        <td>
          <img style={{ width: "200px" }} src={product.image} alt="product" />
        </td>
        <td style={{ fontSize: "25px" }}>{product.name}</td>
        <td>${product.price}</td>
        <td>
          <div className="btn-group">
            <button 
            className="btn btn-info border-right"
            onClick={()=> {
              this.props.subFromCart(product)
            }}
            >-</button>
            {qty}
            <button 
            className="btn btn-info border-left"
            onClick={()=> {
              this.props.addToCart(product)
            }}
            >+</button>
          </div>
        </td>
        <td>${totalPrice}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => {
              this.props.delFromCart(product);
            }}
          >
            x
          </button>
        </td>
      </tr>
    );
  }
}

// Load data form Store
const mapStateToProps = state => {
  return {
    product: state.cartArr
  };
};
//Add data to Store
const mapDispatchToProps = dispatch => {
  return {
    delFromCart: product => {
      dispatch(delFromCart(product));
    },
    addToCart: product => {
      dispatch(addToCart(product));
    },
    subFromCart: product => {
      dispatch(subFromCart(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
