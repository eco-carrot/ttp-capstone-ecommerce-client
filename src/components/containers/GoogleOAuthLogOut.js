import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { logout, clearShoppingCartOnLogOut } from "../../thunks";

class GoogleOAuthLogOut extends Component {
  logout = async () => {
    await this.props.clearShoppingCartOnLogOut();
    await this.props.logout();
    await this.props.history.push("/");
  };

  render() {
    return (
      <>
        <GoogleLogout
          clientId={process.env.CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        ></GoogleLogout>
      </>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    clearShoppingCartOnLogOut: () => dispatch(clearShoppingCartOnLogOut()),
  };
};

export default connect(null, mapDispatch)(GoogleOAuthLogOut);
