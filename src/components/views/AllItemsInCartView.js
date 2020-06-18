import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllItemsInCartView = (props) => {

  return (
    <div className="all-items-in-Cart">      
      <tbody>
      {props.shoppingCart.map((item) => (
            <tr key={item.orderId}>
                <td>Quantity: {item.quantity}{"  "}</td>
                <td>Price: ${((item.price)/100).toFixed(2)}</td>
            </tr>))}
      </tbody>
    </div>
  );
};

AllItemsInCartView.propTypes = {
  allItemsInCart: PropTypes.array.isRequired,  
};

export default AllItemsInCartView;
