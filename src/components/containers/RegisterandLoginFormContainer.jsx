import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterandLoginFormView } from "../views";

import { auth, logout, fetchOpenOrderThunk, fetchAllItemsInCartThunk, clearShoppingCartOnLogOut} from "../../thunks";


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

  handleSignUp = async(event) =>{
    event.preventDefault();
    const formName = event.target.name;
    await this.props.loginOrSignup( this.state, formName);
    await this.props.fetchOpenOrder(this.props.user.id);    
    await this.props.fetchAllItemsInCart(this.props.order.id); 
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const formName = event.target.name;
    await this.props.loginOrSignup( this.state, formName);    
    await this.props.fetchOpenOrder(this.props.user.id);    
    await this.props.fetchAllItemsInCart(this.props.order.id); 
  }

  handleLogOut = async () => {
    console.log("triggerrrred")
    await this.props.clearShoppingCartOnLogOut();
    await this.props.logout();
    await this.props.history.push('/')
  }

  render() {
    return (
      <RegisterandLoginFormView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLogOut={this.handleLogOut}
        handleSignUp={this.handleSignUp}
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
    userEmail: state.user.email,
    user: state.user,
    order: state.order
  };
};

const mapState = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

// Map dispatch to props;
const mapDispatch = dispatch => {
  return {
    loginOrSignup: (userObj, formName) => dispatch(auth(userObj, formName)),
    logout : () => dispatch(logout()),
    fetchAllItemsInCart: (id) => dispatch(fetchAllItemsInCartThunk(id)),
    fetchOpenOrder: (id) => dispatch(fetchOpenOrderThunk(id)),
    clearShoppingCartOnLogOut: () => dispatch(clearShoppingCartOnLogOut())
  }
};

export default connect(mapState, mapDispatch)(RegisterandLoginFormContainer);
export const Login = connect(mapLogin, mapDispatch)(RegisterandLoginFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(RegisterandLoginFormContainer);