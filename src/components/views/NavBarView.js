import React from "react";
import { Link } from "react-router-dom";
import "../../app/App.css"
import homeIcon from '../../icon/home.png'
import userIcon from '../../icon/user.png'
import cartIcon from '../../icon/cart.png'
import historyIcon from '../../icon/history.png'
import viewIcon from '../../icon/glasses.png'

const NavBarView = (props) => {
  return (
    <nav className="nav-bar">
      <div>
        {props.name? 
        <p className="name-nav-link">Hello {props.name}!</p>
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
          <div> 
            {props.name? "Account" : "Login"}

          </div>
        
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
      <Link className="nav-link" onClick={props.changeView}>
        <img 
          //img src : https://www.iconfinder.com/free_icons
          src={viewIcon} alt="view Icon" />
          View</Link>
    </nav>
  );
};

export default NavBarView;