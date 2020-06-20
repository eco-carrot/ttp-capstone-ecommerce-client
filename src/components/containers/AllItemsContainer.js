import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsThunk, clearOrder } from "../../thunks";
import { AllItemsView } from "../views";

class AllItemsContainer extends Component {
  componentDidMount() {
    console.log("Allitem container mount");
    this.props.fetchAllItems();
  }

  clearOrder=()=>{
    this.props.clearOrder();
  }

  render() {
    return (
      <div> 
      {this.props.user.id?"":this.clearOrder()}     
      {console.log(this.props.allItems)}
      <AllItemsView
        allItems={this.props.allItems}
      />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    user: state.user,
    allItems: state.allItems,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllItems: () => dispatch(fetchAllItemsThunk()),
    clearOrder: () => dispatch(clearOrder()),
  };
};

// Type check props;
AllItemsContainer.propTypes = {
  allItems: PropTypes.array.isRequired,
  fetchAllItems: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllItemsContainer);
