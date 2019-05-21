import React, { Component } from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import CartResult from "./CartResult";

class Cart extends Component {
  showProducts = cartArr => {
    return cartArr.map((obj, i) => {
      return <CartItem key={i} obj={obj} />;
    });
  };

  showCartResult = cartArr => {
    let totalAmount = 0;
    if (cartArr.length > 0) {
      for (var i = 0; i < cartArr.length; i++) {
        totalAmount += cartArr[i].product.price * cartArr[i].qty;
      }
    }
    return <CartResult totalAmount={totalAmount} />;
  };

  render() {
    return (
      <div className="row">
        <div className="col-12 mt-5">
          <h1 className="display-4">Giỏ Hàng</h1>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Hình Ảnh</th>
                <th>Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>
            <tbody>{this.showProducts(this.props.cartArr)}</tbody>

            {this.showCartResult(this.props.cartArr)}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartArr: state.cartArr
  };
};
export default connect(
  mapStateToProps,
  null
)(Cart);
