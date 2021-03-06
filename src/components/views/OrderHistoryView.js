import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OrderHistoryView = (props) => {
  
  return (    
      
    <tbody className={props.view?"greenView":"display-or-form"}>
      {props.orderHistory.length?props.orderHistory.map((order) => (
            <tr key={order.orderId}>
               
                <td className="td-order">Order ID: {order.orderId}{"  "}</td>
                <td className="td-order">Total Amount: ${(order.totalOrderAmount/100).toFixed(2)}</td>        
                <td className="td-order">Date: {(order.paidDate).substring(0, 10)}</td>       
                <td className="message-Link">
                    <Link to={`/orderHistory/${order.orderId}`} className="order-link">
                    See Details
                </Link>
                </td >
                </tr>))
                :<tr className={props.view?"greenView":"display-or-form"}><td>No Order History</td></tr>}               
    </tbody>
  );
};

OrderHistoryView.propTypes = {
  orderHistory: PropTypes.array.isRequired,  
};

export default OrderHistoryView;
