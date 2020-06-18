import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editQuantityThunk } from "../../thunks";
import { EditShoppingCartView } from "../views";
class EditShoppingCartContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          quantity:1,
          orderId:1,
          itemId:1,
      };
    }
    handleEditQuantity=(itemId)=>{
        //(id, itemId, quantity)
    // handleEditQuantity=(itemId, quantity)=>{
    //this.props.editQuantity({orderId:this.state.orderId,itemId:itemId,quantity:quantity});
    console.log(itemId)
      this.props.editQuantity(this.props.orderId,itemId,1);
    }
  
    render() {
      return (
        <>
        
          <EditShoppingCartView itemId={this.props.itemId} handleEditQuantity={this.handleEditQuantity}/>
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
        editQuantity: (id, itemId, quantity) => dispatch(editQuantityThunk(id, itemId, quantity))
  });
  
  
  EditShoppingCartContainer.propTypes = {
    editQuantity: PropTypes.func.isRequired,
  };
  
  export default connect(mapState, mapDispatch)(EditShoppingCartContainer);