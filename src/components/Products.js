import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";

class Products extends Component {
  showProducts = products => {
    if (products.length > 0) {
      return products.map((product, i) => {
        return <Product key={i} product={product} />;
      });
    }
  };

  render() {
    let { products } = this.props;
    return <div className="row mt-4">{this.showProducts(products)}</div>;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};
export default connect(
  mapStateToProps,
  null
)(Products);
