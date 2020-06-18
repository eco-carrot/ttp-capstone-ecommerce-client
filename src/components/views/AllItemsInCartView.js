import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {EditShoppingCartContainer} from "../containers"
const AllItemsInCartView = (props) => {

  return (
    <div className="all-items-in-Cart">      
      <tbody>
      {props.shoppingCart.map((item) => (
            <tr key={item.orderId}>
                <td>Product : {props.allItems.map((eachitem => eachitem.id=== item.itemId ? eachitem.name: "" ))}</td>
                <td>Quantity: {item.quantity}{"  "}</td>
                <td>Price: ${((item.price)/100).toFixed(2)}</td>
                <td><EditShoppingCartContainer itemId={item.itemId} orderId={item.orderId}/></td>
            </tr>))}
      </tbody>
    </div>
  );
};

AllItemsInCartView.propTypes = {
  allItemsInCart: PropTypes.array.isRequired,  
};

export default AllItemsInCartView;
