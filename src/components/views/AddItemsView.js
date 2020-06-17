import React from "react";


const AddItemsView = (props) => {
  return (
    <div className="add-to-cart">   
    <button type="button" onClick={()=>props.handleAddToCart(props.id)}>
        Add to Cart
    </button>
    
    </div>
  );
};

export default AddItemsView;