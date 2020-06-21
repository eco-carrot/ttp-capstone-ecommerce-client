import React from "react";
import "../../app/App.css"
// PAUSE
const AddToCartView = (props) => {
  return (
    <div className="add-to-cart">   
      <button type="button" className="button" onClick={()=>props.handleAddToCart(props.id)}>
          Add to Cart
      </button>
    
    </div>
  );
};

export default AddToCartView;