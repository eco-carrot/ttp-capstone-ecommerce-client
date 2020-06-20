import React from "react";
import { Link } from "react-router-dom";

const NavBarView = (props) => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to={"/shoppingCart"}  className="nav-link">
        Shopping Cart
      </Link>
    </nav>
  );
};

export default NavBarView;