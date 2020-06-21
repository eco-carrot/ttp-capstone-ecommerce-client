import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css"
const NavBarView = (props) => {
  return (

    <nav className="nav-bar">
      <div>
        {props.name? 
        <p className="nav-link">Hello {props.name}!</p>
        : ""}
      </div>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to={"/shoppingCart"}  className="nav-link">
        Cart
      </Link>
      <Link to={"/orderHistory"}  className="nav-link">
        Order History
      </Link>
    </nav>
  );
};

export default NavBarView;