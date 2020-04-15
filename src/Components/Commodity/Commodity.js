import React from 'react';
import './Commodity.css';




class Commodity extends React.Component{

    render(){


        return(
            <div> 
                <li>{this.props.listItemKey}
                    <h4>Date: {this.props.commodityDate}</h4>
                    <h4>Price: ${this.props.commodityPrice}</h4>
                </li>
            </div> 
        );
    }
}






export default Commodity; 