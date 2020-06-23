import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const OrderDetailsView = (props) => {
    
  return (
    <div className="order-detais">    
    {props.orderIndex !== -1?  
    
        <div className={props.view?"greenView":"display-or-form"}>
            <h2>Order #{props.orderHistory[props.orderIndex].orderId}</h2>
            <p>Date: {(props.orderHistory[props.orderIndex].paidDate).substring(0,10)}</p>
            <h2>Items: </h2>
            {props.orderHistory[props.orderIndex].itemsInOrder.map((item) => (
                <div key={item.id}>
                <Link to={`/items/${item.id}`}>
                    <p>{item.name}</p>
                </Link>
                <img src={item.imageURL} width="50px" alt={item.name} />   
                <p>Price: ${((item.price)/100).toFixed(2)}</p>      
                <p>Quantity: {item.unitsSold}</p>      
                <p>Amount: ${((item.unitsSold * item.price)/100).toFixed(2)}</p>   
                </div>
            ))}
            <h2>Total: ${((props.orderHistory[props.orderIndex].totalOrderAmount)/100).toFixed(2)}</h2>
        </div>
    
    : ""}  
      

    </div>
  );
};

OrderDetailsView.propTypes = {
  orderHistory: PropTypes.array.isRequired,  
};

export default OrderDetailsView;