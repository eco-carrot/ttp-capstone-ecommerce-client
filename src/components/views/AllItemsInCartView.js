import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


import {EditShoppingCartContainer} from "../containers"
const AllItemsInCartView = (props) => {
  let cartTotal = 0;
  return (
    
    <tbody className="all-items-in-Cart">
      {props.shoppingCart.length?props.shoppingCart.map((item) => (
            <tr key={item.itemId}>
                <td>Product : {props.allItems.map((eachitem => eachitem.id=== item.itemId ? eachitem.name: "" ))}</td>
                <td>Quantity: {item.quantity}{"  "}</td>
                <td>Price: ${((item.price)/100).toFixed(2)}</td>
                <td> = $ {((item.price)/100).toFixed(2)*item.quantity}</td>
                <td><EditShoppingCartContainer itemId={item.itemId} orderId={item.orderId}/></td>
                <td><button type="button" 
                      onClick={()=>props.handledeleteitem(item.orderId,item.itemId)}>
                        Remove Item
                    </button></td>
                <td hidden>{cartTotal+= ((item.price)/100).toFixed(2)*item.quantity}</td>
                </tr>))
                :""}
                Cart Total : {cartTotal}
                
    </tbody>
  );
};

AllItemsInCartView.propTypes = {
  shoppingCart: PropTypes.array.isRequired,  
};

export default AllItemsInCartView;
