import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsInCartThunk, fetchAllItemsThunk,deleteItemThunk } from "../../thunks";
import { AllItemsInCartView } from "../views";

class AllItemsInCartContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItemsInCart(this.props.match.params.id);
    this.props.fetchAllItems();
  }

  handledeleteitem=(id)=>{
    this.props.deleteItem(id);
  }

  render() {
    return (
      <div> 
        {console.log("shoppingCart", this.props.shoppingCart)}
          <AllItemsInCartView
            shoppingCart={this.props.shoppingCart}
            allItems={this.props.allItems}
            handledeleteitem={this.handledeleteitem}
            />
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    shoppingCart: state.shoppingCart,
    allItems: state.allItems,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllItemsInCart: (id) => dispatch(fetchAllItemsInCartThunk(id)),
    fetchAllItems: () => dispatch(fetchAllItemsThunk()),
    deleteItem: (id) => dispatch(deleteItemThunk(id))
  };
};

// Type check props;
AllItemsInCartContainer.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  fetchAllItemsInCart: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllItemsInCartContainer);
