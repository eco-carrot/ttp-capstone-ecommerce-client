import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsInCartThunk } from "../../thunks";
import { AllItemsInCartView } from "../views";

class AllItemsInCartContainer extends Component {
  componentDidMount() {
    this.props.fetchAllItemsInCart(this.props.match.params.id);
  }

  render() {
    return (
      <div>      
          <AllItemsInCartView
            shoppingCart={this.props.shoppingCart}/>
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    shoppingCart: state.shoppingCart,
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllItemsInCart: (id) => dispatch(fetchAllItemsInCartThunk(id)),
  };
};

// Type check props;
AllItemsInCartContainer.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  fetchAllItemsInCart: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllItemsInCartContainer);
