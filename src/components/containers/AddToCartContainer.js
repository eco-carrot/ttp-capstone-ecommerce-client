import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCartThunk, createOrderThunk, fetchAllItemsInCartThunk } from "../../thunks";
import { AddToCartView } from "../views";

class AddToCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        quantity:1,
        orderId: this.props.order.id,
        itemId: this.props.id,
        //shoppingCart=false, 
    };
  }

  componentDidMount() {
    console.log("AddToCart container mount");
    this.props.fetchAllItemsInCart(this.state.orderId);
  }

  handleAddToCart=()=>{
    //this.setState({orderId: this.props.match.params.id})
    // (shoppingCart)?(this.setState({orderId:this.props})):this.props.createOrder();
    
    // orderId need to be changed later on, depending on order associated with user
    this.props.addToCart({ orderId: this.state.orderId, itemId: this.state.itemId, quantity: this.state.quantity});
    this.props.fetchAllItemsInCart(this.state.orderId);
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
      order: state.order
    };
  };

const mapDispatch = (dispatch, ownProps) => ({
    addToCart: (id,itemId,quantity) => dispatch(addToCartThunk(id,itemId,quantity)),
    createOrder: (ownProps) => dispatch(createOrderThunk(ownProps)),
    fetchAllItemsInCart: (id) => dispatch(fetchAllItemsInCartThunk(id))
});


AddToCartContainer.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AddToCartContainer);