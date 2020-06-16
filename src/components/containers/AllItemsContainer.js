import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsThunk } from "../../thunks";
import { AllItemsView } from "../views";

class AllItemsContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  render() {
    return (
      
      <AllItemsView
        allItems={this.props.allItems}
      />
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    allItems: state.allItems,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllItems: () => dispatch(fetchAllItemsThunk()),
  };
};

// Type check props;
AllItemsContainer.propTypes = {
  allItems: PropTypes.array.isRequired,
  fetchAllItems: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllItemsContainer);
