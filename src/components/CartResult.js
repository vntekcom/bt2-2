import React, { Component } from "react";

class CartResult extends Component {


  render() {
    return (
      <tr>
        <td />
        <td />
        <td />

        <td style={{ fontSize: "30px" }} className="font-weight-bold">
          Tổng Tiền
        </td>
        <td style={{ fontSize: "30px" }} className="font-weight-bold">
          ${this.props.totalAmount}
        </td>
        <td>
          <button style={{ fontSize: "30px" }} className="btn btn-info">
            Thanh Toán
          </button>
        </td>
      </tr>
    );
  }
}

export default CartResult;
