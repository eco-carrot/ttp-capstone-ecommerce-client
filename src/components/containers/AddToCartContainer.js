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
        orderId:1,
        itemId:1,
        //shoppingCart=false, 
    };
  }

  handleAddToCart=(itemId)=>{
    //this.setState({orderId: this.props.match.params.id})
    // (shoppingCart)?(this.setState({orderId:this.props})):this.props.createOrder();
    
    // orderId need to be changed later on, depending on order associated with user
    this.props.addToCart({quantity: this.state.quantity, orderId: this.state.orderId,itemId:itemId});
  }

  render() {
    return (
      <>
        {/* passed item id to be added from prev props */}
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

const mapDispatch = (dispatch, ownProps) => ({
    addToCart: (id) => dispatch(addToCartThunk(id)),
    createOrder: (ownProps) => dispatch(createOrderThunk(ownProps))
});


AddToCartContainer.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AddToCartContainer);