import React from "react";
//import "./styles/StudentView.css";
import { Link } from "react-router-dom";


const ItemView = (props) => {
  return ( 
    <>   
      <img src={props.item.imageURL} width="300px" 
      alt={props.item.name} />         
      <h1>{props.item.name}</h1>
      <h3>Category: {props.item.category}</h3>
      <p>Item ID: {props.item.id}</p>
      <p>Price: ${((props.item.price)/100).toFixed(2)}</p>
      <p>Details: {props.item.description}</p>   
      <p>In Stock: {props.item.quantity}</p>     
    </>
  );
};

export default ItemView;