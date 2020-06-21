import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const OrderHistoryView = (props) => {
  
  return (    
      
    <tbody className="all-orders-in-history">
      {props.orderHistory?props.orderHistory.map((order) => (
            <tr key={order.orderId}>
               
                <td>Order ID: {order.orderId}{"  "}</td>
                <td>Total Amount: ${(order.totalOrderAmount/100).toFixed(2)}</td>        
                <td>Date: {(order.paidDate).substring(0, 10)}</td>       
                <td>
                    <Link to={`/orderHistory/${order.orderId}`}>
                    See Details
                </Link>
                </td>
                </tr>))
                :"No Order History"}               
    </tbody>
  );
};

OrderHistoryView.propTypes = {
  orderHistory: PropTypes.array.isRequired,  
};

export default OrderHistoryView;
