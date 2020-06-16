import React, { Component } from "react";
import { connect } from "react-redux";
import {  
  fetchItemThunk
} from "../../thunks";

import { ItemView } from "../views";

class ItemContainer extends Component {
  componentDidMount() {
    this.props.fetchItem(this.props.match.params.id);    
    
  }

  /*
  handleDelete = (id) => {
    this.props.deleteItem(id);
    this.props.history.push("/items");
  };  
  */

  render() {
    console.log(this.props)
    return (
      <ItemView
        item={this.props.item}
        //handleDelete={this.handleDelete}  
        //campus={this.props.fetchCampus()}
        
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    item: state.item,    
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchItem: (id) => dispatch(fetchItemThunk(id)),
    //deleteItem: (id) => dispatch(deleteItemThunk(id)),    
    //fetchCampus: (id) => dispatch(fetchCampusThunk(id))    
  };
};

export default connect(mapState, mapDispatch)(ItemContainer);