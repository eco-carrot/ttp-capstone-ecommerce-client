import React from "react";
//import { Link } from "react-router-dom";

const EditShoppingCartView = (props) => {
    
    return (
      <div className="edit-cart">   
        <td><input type="number" placeholder="Enter Quantity:" onChange={props.handleChange}/></td>
        <td><button type="button" onClick={()=>props.handleEditQuantity(props.itemId)}>
            Edit Quantity
        </button></td>
      
      </div>
    );
  };
export default EditShoppingCartView;