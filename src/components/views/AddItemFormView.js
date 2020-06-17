import React from "react";
import PropTypes from "prop-types";

const AddItemFormView = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          Item Name:{" "}
          <input
            value={props.name}
            name="name"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Price:{" "}
          <input
            value={props.price}
            name="price"
            type="number"
            step=".01"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Quantity:{" "}
          <input
            value={props.quantity}
            name="quantity"
            type="number"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Category:{" "}
          <input
            value={props.category}
            name="category"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Description:{" "}
          <input
            value={props.description}
            name="description"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div>
          Image URL:{" "}
          <input
            value={props.imageURL}
            name="imageUrl"
            onChange={props.handleChange}            
          ></input>
        </div>
        <button>Add Item</button>
      </form>
    </div>
  );
};

AddItemFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,  
  imageURL: PropTypes.string.isRequired
};

export default AddItemFormView;
