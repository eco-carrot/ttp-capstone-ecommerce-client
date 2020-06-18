import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart } from "../../thunks";
import { AddToCartView } from "../views";

class AddToCartContainer extends Component {
// PAUSE
  constructor(props) {
    super(props);
    this.state = {
        name : "",
        price: 0, 
    };
  }

  handleAddToCart=(id)=>{
    this.props.addToCart(id);
  }

  render() {
    return (
      <>
        <AddToCartView id={this.props.id} handleAddToCart={this.handleAddToCart}/>
      </>
    );
  }
}
const mapState = (state) => {
    return {
      shoppingCart: state.shoppingCart,
    };
  };

const mapDispatch = (dispatch) => ({
    //addToCart: (id) => dispatch(addToCart(id)),
    addToCart: (id) => dispatch(addToCart(id)),
});


AddToCartContainer.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AddToCartContainer);