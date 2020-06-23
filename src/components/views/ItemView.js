import React from "react";
//import "./styles/ItemView.css";
import { Link } from "react-router-dom";
import {AddToCartContainer} from "../containers"


const ItemView = (props) => {
  return ( 
    <div className={props.view?"greenView":"display-or-form"}>   
      <img src={props.item.imageURL} width="300px" 
      alt={props.item.name} />         
      <h1>{props.item.name}</h1>
      <h3>Category: {props.item.category}</h3>
      <p>Item ID: {props.item.id}</p>
      <p>Price: ${((props.item.price)/100).toFixed(2)}</p>
      <p>Details: {props.item.description}</p>   
      <p>In Stock: {props.item.quantity}</p>    
      <AddToCartContainer id={props.item.id}/>
            

      {props.user.role === "admin" ? 
      <div> 
        <Link className="edit-link" to={`/items/${props.item.id}/edit`}>
          <button>Edit</button>
        </Link>
      <button onClick={() => props.handleDelete(props.item.id)}>
        Delete
      </button> 
      </div>
      : ""}
      
    </div>
  );
};

export default ItemView;