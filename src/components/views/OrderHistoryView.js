import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OrderHistoryView = (props) => {
  
  return (    
      
    <tbody className="display-or-form">
      {props.orderHistory.length?props.orderHistory.map((order) => (
            <tr key={order.orderId}>
               
                <td>Order ID: {order.orderId}{"  "}</td>
                <td>Total Amount: ${(order.totalOrderAmount/100).toFixed(2)}</td>        
                <td>Date: {(order.paidDate).substring(0, 10)}</td>       
                <td className="message-Link">
                    <Link to={`/orderHistory/${order.orderId}`}>
                    See Details
                </Link>
                </td>
                </tr>))
                :<div className="display-or-form">No Order History</div>}               
    </tbody>
  );
};

OrderHistoryView.propTypes = {
  orderHistory: PropTypes.array.isRequired,  
};

export default OrderHistoryView;
