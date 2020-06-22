import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {AddToCartContainer} from "../containers"

const AllItemsView = (props) => {

  return (
    <div>      
      <div>
        {props.allItems.map((item) => (
            <div key={item.id}>
              <div className="item-detail">
                <Link to={`/items/${item.id}`} >
                  <h1>{item.name}</h1>
                </Link>
              </div>
              <div className="flip-card">      
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={item.imageURL} width="300px" height="300px" alt={item.name} />
                  </div>
                  <div className="flip-card-back" >
                    <h3>Category: {item.category}</h3>
                      <p>Details: {item.description}</p>   
                      <p>In Stock: {item.quantity}</p>              
                  </div>
                </div>
              </div>   
              <p className="display" >Price: ${((item.price)/100).toFixed(2)}</p>
              <AddToCartContainer id={item.id}/>
            </div>
        ))}
      </div>
      {props.user.role === "admin" ? 
        <Link to="/items/new" className="add-item">
          <button>Add New Item</button>
        </Link> : ""}
    </div>
  );
};

AllItemsView.propTypes = {
  allItems: PropTypes.array.isRequired,  
};

export default AllItemsView;
