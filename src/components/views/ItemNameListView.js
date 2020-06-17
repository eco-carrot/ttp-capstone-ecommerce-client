import React from "react";
import { Link } from "react-router-dom";

const ItemNameListView = (props) => {
  console.log(props);
  if (!props.items) {
    return <p>There are no items enrolled</p>;
  }
  return (
    <>
      <div>
        <p>{props.items.length} Items</p>
        <ul className="items">
          {props.items.map((item) => (
            <li key={item.id} className="item-name">
              <Link to={`/items/${item.id}`}>{item.firstName}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ItemNameListView;
