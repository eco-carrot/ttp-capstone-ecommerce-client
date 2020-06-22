import React, { Component } from "react";
import { connect } from "react-redux";
import { NavBarView } from "../views";
import { changeView } from "../../thunks";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        changeView: true
    };
  }

  changeView=()=>{
    this.setState({changeView:!this.state.changeView})
    this.props.changeView(this.state.changeView)
  }

  render() {
    return <NavBarView name={this.props.user.firstName} changeView={this.changeView}/>;
  }  
}

const mapState = (state) => {
  return {      
    user: state.user,
    view: state.view 
  };
};

const mapDispatch = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view)),
  };
};

export default connect(mapState,mapDispatch)(NavBarContainer);