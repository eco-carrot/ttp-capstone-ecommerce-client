import React from "react";
import {Link} from "react-router-dom"

const RegisterandLoginFormView = props => {
  const { name, displayName, handleSubmit, error, handleChange, isLoggedIn, userEmail } = props;

  return (
    <div>
      {isLoggedIn ? `The current logged in user is: ${userEmail}` : ""}
      {name==="login"?
        <form onSubmit={handleSubmit} name={name}>
        <h3>Log in </h3>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        <div>
          <Link to={`/signup/`}>
                <button>Sign Up if you don't have an Account with us yet :D</button>
          </Link>
        </div>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      :
      <form onSubmit={handleSubmit} name={name}>
        <h3>Sign Up Page</h3>
        <div>
          <label>
            <small>First Name</small>
          </label>
          <input name="firstName" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">
            <small>Last Name</small>
          </label>
          <input name="lastName" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        <div>
          <Link to={`/login/`}>
                <button>Log In if you have an Account Already :D</button>
          </Link>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>}
      
    </div>
  );
};

export default RegisterandLoginFormView;