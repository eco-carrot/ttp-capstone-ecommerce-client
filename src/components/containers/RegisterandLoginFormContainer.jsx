import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterandLoginFormView } from "../views";
<<<<<<< HEAD
import { auth, logout } from "../../thunks";
=======
import { auth, fetchOpenOrderThunk, fetchAllItemsInCartThunk} from "../../thunks";
>>>>>>> b6d57c2052c334918bc1b1a26983e2b2e0d4831d

class RegisterandLoginFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      lastName:"",
      firstName:"",
      email: "",
      password: ""
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const formName = event.target.name;
    await this.props.loginOrSignup( this.state, formName);
    await this.props.fetchOpenOrder(this.props.user.id);    
    await this.props.fetchAllItemsInCart(this.props.order.id); 
  }

  handleLogout = () => {

  }

  render() {
    return (
      <RegisterandLoginFormView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLogOut={this.props.logout}
        isLoggedIn={this.props.isLoggedIn}
        userEmail={this.props.userEmail}
      />
    );
  }
};

// Map state to props;
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email,
    shoppingCart: state.shoppingCart,
    allItems: state.allItems,
    user: state.user,
    order: state.order
  };
};

// Map state to props;
const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.user.error,
    isLoggedIn: !!state.user.id,
    userEmail: state.user.email
  };
};

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginOrSignup: (userObj, formName) => dispatch(auth(userObj, formName)),
<<<<<<< HEAD
    logout : () => dispatch(logout())
=======
    fetchAllItemsInCart: (id) => dispatch(fetchAllItemsInCartThunk(id)),
    fetchOpenOrder: (id) => dispatch(fetchOpenOrderThunk(id))
>>>>>>> b6d57c2052c334918bc1b1a26983e2b2e0d4831d
  }
};

export const Login = connect(mapLogin, mapDispatch)(RegisterandLoginFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(RegisterandLoginFormContainer);