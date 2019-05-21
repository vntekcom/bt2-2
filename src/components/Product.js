import React, { Component } from "react";
import { connect } from "react-redux";
//IMPORT ACTION
import { addToCart } from "./../actions/index";

class Product extends Component {
  // Hàm show rating!!!
  showRating = rating => {
    let star = [];
    for (let i = 1; i <= rating; i++) {
      star.push(<i key={i} className="fa fa-star" aria-hidden="true" />);
    }
    for (let j = 1; j <= 5 - rating; j++) {
      star.push(<i key={5 + j} className="fa fa-star-o" aria-hidden="true" />);
    }
    return star;
  };

  render() {
    let { product } = this.props;

    return (
      <div className="col-4">
        <div className="card p-2">
          <img
            style={{ height: "280px" }}
            src={product.image}
            className="w-100"
            alt={product.name}
          />
          <h3> {product.name} </h3>
          <p>{product.description}</p>
          <ul className="rating">
            <li>{this.showRating(product.rating)}</li>
          </ul>
          <p> ${product.price} </p>
          <button
            className="btn btn-success"
            onClick={() => {
              //Chú ý hàm arrow funtion này
              this.props.addToCart(product);
            }}
          >
            Cart
          </button>
        </div>
      </div>
    );
  }
}

//Add data to Store
const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Product);
