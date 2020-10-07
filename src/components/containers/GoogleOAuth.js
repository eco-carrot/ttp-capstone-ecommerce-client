import React, { Component } from "react";
import { connect } from "react-redux";
import{ GoogleLogin} from 'react-google-login';
import { auth, logout, fetchOpenOrderThunk, fetchAllItemsInCartThunk, clearShoppingCartOnLogOut} from "../../thunks";
require('dotenv').config({ path: '../../../' })

class GoogleOAuth extends Component { 


    signUpGoogle = async(res)=> {
        console.log(res.profileObj)
        console.log(this.props)
        await this.props.loginOrSignup({email:res.profileObj.email, firstName:res.profileObj.givenName, lastName: res.profileObj.familyName, password:res.profileObj.googleId},"signup")
    }

    logInGoogle = async(res) => {
        console.log(res.profileObj)
        console.log(this.props)
        await this.props.loginOrSignup({email:res.profileObj.email, password:res.profileObj.googleId},"login") ; 
    }

    render() {
        return <div>{ this.props.name === "logIn"?
                        <GoogleLogin
                            clientId= {process.env.REACT_APP_GOOGLE_OAUTH_KEY}
                            buttonText="Log In with Your Google Account"
                            onSuccess={this.logInGoogle}
                            onFailure={this.logInGoogle}
                            cookiePolicy={'single_host_origin'}/>
                        :
                        <GoogleLogin
                            clientId= {process.env.REACT_APP_GOOGLE_OAUTH_KEY}
                            buttonText="Sign Up with Google"
                            onSuccess={this.signUpGoogle}
                            onFailure={this.signUpGoogle}
                            cookiePolicy={'single_host_origin'}/>
                        }
        </div>;
    }  
}

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
      user: state.user,
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
  
  export default connect(mapState, mapDispatch)(GoogleOAuth);
  export const Login = connect(mapLogin, mapDispatch)(GoogleOAuth);
  export const Signup = connect(mapSignup, mapDispatch)(GoogleOAuth);

