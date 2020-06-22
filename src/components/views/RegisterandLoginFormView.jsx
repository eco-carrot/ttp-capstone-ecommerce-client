import React from "react";
import {Link} from "react-router-dom";
import {GoogleOAuth,GoogleOAuthLogOut} from "../containers"

const RegisterandLoginFormView = props => {
  const { name, displayName, handleSubmit, error, handleChange, isLoggedIn, userEmail, handleLogOut, handleSignUp} = props;

  return (
    <div>
      {isLoggedIn ? 
        <div className="display-or-form"> 
          <h3>Good Day!</h3>
          <h2>{userEmail}</h2>
          <h4>You have successfully Logged In, </h4>
          <h4>We hope you enjoy your Shopping Experience!</h4>
          <Link to={`/`}>
                  <button>Click Here to Return to Home</button>
          </Link>
          <button onClick={handleLogOut}>Log Out</button>
          <GoogleOAuthLogOut/>
        </div> 
        : <>{name==="login"?
        <form onSubmit={handleSubmit} name={name} className="display-or-form">
        <h3>Log in </h3>
        <div>
          <label htmlFor="email" className="col-25">
            <small>Email</small>
          </label>
          <input className="col-75" name="email" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password" className="col-25">
            <small>Password</small>
          </label>
          <input className="col-75" name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        <div className="link">
          <Link to={`/signup/`}>
                <p>Sign Up if you don't have an Account with us yet :D</p>
          </Link>
        </div>
        <GoogleOAuth name="logIn"/>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      :
      <form onSubmit={handleSignUp} name={name} className="display-or-form">
        <h3>Sign Up </h3>
        <div>
          <label className="col-25">
            <small>First Name</small>
          </label>
          <input className="col-75" name="firstName" type="text" onChange={handleChange} />
        </div>
        <div>
          <label className="col-25" htmlFor="email">
            <small>Last Name</small>
          </label>
          <input className="col-75" name="lastName" type="text" onChange={handleChange} />
        </div>
        <div>
          <label className="col-25" htmlFor="email" >
            <small>Email</small>
          </label>
          <input className="col-75" name="email" type="text" onChange={handleChange} />
        </div>
        <div>
          <label className="col-25"htmlFor="password" >
            <small>Password</small>
          </label>
          <input className="col-75" name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        <div className="link">
          <Link to={`/login/`}>
                <p>Log In if you have an Account with us Already :D</p>
          </Link>
        </div>
        <GoogleOAuth name="signUp"/>
        {error && error.response && <div> {error.response.data} </div>}
      </form>}</>}
      
      
    </div>
  );
};

export default RegisterandLoginFormView;