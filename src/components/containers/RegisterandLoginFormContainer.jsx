import React, { Component } from "react";
import { connect } from "react-redux";
import { RegisterandLoginFormView } from "../views";
import { auth } from "../../thunks";

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

  handleSubmit = (event) => {
    event.preventDefault();
    const formName = event.target.name;
    this.props.loginOrSignup( this.state, formName);
  }

  render() {
    return (
      <RegisterandLoginFormView
        name={this.props.name}
        displayName={this.props.displayName}
        error={this.props.error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
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
    userEmail: state.user.email
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
    loginOrSignup: (userObj, formName) => dispatch(auth(userObj, formName))
  }
};

export const Login = connect(mapLogin, mapDispatch)(RegisterandLoginFormContainer);
export const Signup = connect(mapSignup, mapDispatch)(RegisterandLoginFormContainer);