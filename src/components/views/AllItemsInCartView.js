import React from "react";
import PropTypes from "prop-types";
import {EditShoppingCartContainer} from "../containers"

const AllItemsInCartView = (props) => {
  let cartTotal = 0;
  let totalQuantity = 0;
  return (
    <table>
      <tbody>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      {props.shoppingCart.length?props.shoppingCart.map((item) => (
            <tr key={item.itemId}>
                <td> {props.allItems.map((eachitem => eachitem.id=== item.itemId ? eachitem.name: "" ))}</td>
                <td> {item.quantity}</td>
                <td> $ {((item.price)/100).toFixed(2)}</td>
                <td> = $ {((item.price)/100).toFixed(2)*item.quantity}</td>
                <td><EditShoppingCartContainer itemId={item.itemId} orderId={item.orderId}/></td>
                <td><button type="button" 
                      onClick={()=>props.handledeleteitem(item.orderId,item.itemId)}>
                        Remove Item
                    </button></td>
                <td hidden>{cartTotal+= ((item.price)/100).toFixed(2)*item.quantity}</td>
                <td hidden>{totalQuantity+= item.quantity}</td>
                </tr>))
                :""}
                <tr>
                  <td>Total Items:</td>
                  <td> {totalQuantity} </td>
                  <td>Cart Total: </td>
                  <td> ${cartTotal}</td>
                </tr>
      </tbody>
    </table>
  );
};

AllItemsInCartView.propTypes = {
  shoppingCart: PropTypes.array.isRequired,  
};

export default AllItemsInCartView;
