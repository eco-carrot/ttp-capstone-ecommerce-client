import React from "react";
//import { Link } from "react-router-dom";

const EditShoppingCartView = (props) => {
    
    return (
      <div className="edit-cart">   
        <button type="button" onClick={()=>props.handleEditQuantity(props.itemId)}>
            Edit Quantity
        </button>
      
      </div>
    );
  };
export default EditShoppingCartView;