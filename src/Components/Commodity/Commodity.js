import React from 'react';
import './Commodity.css';

class Commodity extends React.Component {
  render() {
    return (
      <div className="commodity">
        {this.props.commodityDescription}
        <h4>Date: {this.props.commodityDate}</h4>
        <br />
        <h4>Price: ${this.props.commodityPrice}</h4>
      </div>
    );
  }
}

export default Commodity;
