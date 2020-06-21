import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBarView } from "../views";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

class NavBarContainer extends Component {  

  render() {
    return <NavBarView name={this.props.user.firstName}/>;
  }  
}

const mapState = (state) => {
  return {      
    user: state.user 
  };
};

export default connect(mapState)(NavBarContainer);