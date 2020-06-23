import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCartThunk, createOrderThunk } from "../../thunks";
import { AddToCartView } from "../views";

class AddToCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quantity:1,
        orderId: this.props.order.id,
        itemId: this.props.id,

    };
  }

  handleAddToCart=()=>{
    this.props.addToCart({ orderId: this.state.orderId, itemId: this.state.itemId, quantity: this.state.quantity});

  }

  render() {
    return (
      <>
        {/* passed item id to be added from prev props */}
        <AddToCartView id={this.props.id} handleAddToCart={this.handleAddToCart} view={this.props.view}/>
      </>
    );
  }
}
const mapState = (state) => {
    return {
      shoppingCart: state.shoppingCart,
      order: state.order,
      view: state.view
    };
  };

const mapDispatch = (dispatch, ownProps) => ({
    addToCart: (id,itemId,quantity) => dispatch(addToCartThunk(id,itemId,quantity)),
    createOrder: (ownProps) => dispatch(createOrderThunk(ownProps)),
});


AddToCartContainer.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AddToCartContainer);