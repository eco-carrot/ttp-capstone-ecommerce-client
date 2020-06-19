import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {EditShoppingCartContainer} from "../containers"
const AllItemsInCartView = (props) => {

  return (
    <tbody className="all-items-in-Cart">
      {props.shoppingCart.map((item) => (
            <tr key={item.itemId}>
                <td>Product : {props.allItems.map((eachitem => eachitem.id=== item.itemId ? eachitem.name: "" ))}</td>
                <td>Quantity: {item.quantity}{"  "}</td>
                <td>Price: ${((item.price)/100).toFixed(2)}</td>
                <td><EditShoppingCartContainer itemId={item.itemId} orderId={item.orderId}/></td>
                <td><button type="button" 
                      onClick={()=>props.handledeleteitem(item.itemId)}>
                        Remove Item
                    </button></td>
                </tr>))}
    </tbody>
  );
};

AllItemsInCartView.propTypes = {
  allItemsInCart: PropTypes.array.isRequired,  
};

export default AllItemsInCartView;
