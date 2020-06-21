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
          itemId:0,
          edit:false,
      };
    }

    handleChange = (e) => {
      this.setState({quantity: e.target.value});
    };

    handleEditQuantity=(itemId)=>{
      this.props.editQuantity(this.props.orderId,itemId,this.state.quantity);
      this.setState({edit:false})
    }

    edit=()=>{
      this.setState({edit:!this.state.edit})
    }
  
    render() {
      return (
        <>
          {!this.state.edit?<button onClick={this.edit}>edit quantity</button>:""}
          {this.state.edit?<EditShoppingCartView 
              itemId={this.props.itemId} 
              handleChange = {this.handleChange}
              handleEditQuantity={this.handleEditQuantity}/>:""}
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