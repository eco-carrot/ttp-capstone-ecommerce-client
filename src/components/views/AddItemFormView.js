import React from "react";
import PropTypes from "prop-types";

const AddItemFormView = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} className="display-or-form">
        <div className="col-25">
          <label>
            Item Name:{" "}
          </label>
        </div>
        <div className="col-75">
          <input
            value={props.name}
            name="name"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div className="col-25">
          <label>
            Price:{" "}
          </label>
        </div>
        <div className="col-75">
          <input
            value={props.price}
            name="price"
            type="number"
            step=".01"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div className="col-25">
          <label>
            Quantity:{" "}
          </label>
        </div>
        <div className="col-75">
          <input
            value={props.quantity}
            name="quantity"
            type="number"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div className="col-25">
          <label>
            Category:{" "}
          </label>
        </div>
        <div className="col-75">
          <input
            value={props.category}
            name="category"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div className="col-25">
          <label>
            Description:{" "}
          </label>
        </div>
        <div className="col-75">
          <input
            value={props.description}
            name="description"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div className="col-25">
          <label>
            Image URL:{" "}
          </label>
        </div>
        <div className="col-75">
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
