import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllItemsView = (props) => {

  return (
    <div className="all-items">      
      <div>
        {props.allItems.map((item) => (
            <div key={item.id}>
              <Link to={`/items/${item.id}`}>
                <h1>{item.name}</h1>
              </Link>
              <img src={item.imageURL} width="200px" alt={item.name} />              
            </div>
        ))}
      </div>
      


    </div>
  );
};

AllItemsView.propTypes = {
  allItems: PropTypes.array.isRequired,  
};

export default AllItemsView;
