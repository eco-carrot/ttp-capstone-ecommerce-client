import React from "react";

const ShoppingCartView = (props) => {
  return (
    <div className="add-to-cart">   
    <button type="button" onClick={()=>props.handleAddToCart(props.name,props.price)}>
        Add to Cart
    </button>
    </div>
  );
};

export default ShoppingCartView;