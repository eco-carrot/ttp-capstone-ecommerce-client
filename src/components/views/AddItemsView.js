import React from "react";
import {OrderContainer} from "../containers" 

const AddItemsView = (props) => {
  return (
    <div className="add-to-cart">   
    <button type="button" onClick={()=>props.handleAddToCart(props.itemId)}>
        Add to Cart
    </button>
    
    </div>
  );
};

export default AddItemsView;