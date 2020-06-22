import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css"
import homeIcon from '../../icon/home.png'
import userIcon from '../../icon/user.png'
import cartIcon from '../../icon/cart.png'
import historyIcon from '../../icon/history.png'

const NavBarView = (props) => {
  return (
    <nav className="nav-bar">
      <div>
        {props.name? 
        <p className="nav-link">Hello {props.name}!</p>
        : ""}
      </div>
      <Link to="/" className="nav-link">
        <img 
          //img src : https://www.iconfinder.com/free_icons
          src={homeIcon} alt="home Icon" />
        Shop
      </Link>
      <Link to="/login" className="nav-link">
        <img 
          //img src : https://www.iconfinder.com/free_icons
          src={userIcon} alt="user Icon" />
        Login
      </Link>
      <Link to={"/shoppingCart"}  className="nav-link">
        <img 
          //img src : https://www.iconfinder.com/free_icons
          src={cartIcon} alt="cart Icon" />
        Cart
      </Link>
      <Link to={"/orderHistory"}  className="nav-link">
        <img 
          //img src : https://www.iconfinder.com/free_icons
          src={historyIcon} alt="history Icon" />
        Order History
      </Link>
    </nav>
  );
};

export default NavBarView;