import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {AddToCartContainer} from "../containers"

const AllItemsView = (props) => {

  return (
    <div className="all-items">      
      <div>
        {props.allItems.map((item) => (
            <div key={item.id}>
              <Link to={`/items/${item.id}`}>
                <h1>{item.name}</h1>
              </Link>
              <img src={item.imageURL} width="150px" alt={item.name} />   
              <p>Price: ${((item.price)/100).toFixed(2)}</p>
              <AddToCartContainer name={item.name} price={item.price} id={item.id}/>        
            </div>
        ))}
      </div>
      
      <Link to="/items/new" className="add-item">
        Add New Item
      </Link>


    </div>
  );
};

AllItemsView.propTypes = {
  allItems: PropTypes.array.isRequired,  
};

export default AllItemsView;
