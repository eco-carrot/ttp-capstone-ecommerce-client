import React from "react";
import { Link } from "react-router-dom";
import { ItemListContainer } from "../containers";

const OrderView = (props) => {
  return (
    <div className="per-order">
      hello from o
      {/* <img src={props.order.imageUrl} alt={props.order.name} />
      <h1>{props.order.price}</h1>

      <p>{props.order.description}</p> */}

      {/* <ItemListContainer items={props.order.items} /> */}

      <button onClick={() => props.handleDelete(props.order.id)}>
        Delete
      </button>
    </div>
  );
};

export default OrderView;
