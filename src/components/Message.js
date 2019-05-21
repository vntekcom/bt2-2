import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 mt-5">
          <span className="bg-warning text-white px-3 py-2">
            {this.props.cartresult}
          </span>
        </div>
      </div>
    );
  }
}

export default Message;
