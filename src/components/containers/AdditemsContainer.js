import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addToCart} from "../../thunks";
import { AddItemsView } from "../views";

class AddItemsContainer extends Component {
// name={item.name} price={item.price} itemId={item.id}
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
        <AddItemsView itemId={this.props.itemId} allItems={this.props.shoppingCart} handleAddToCart={this.handleAddToCart}/>
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
    addToCart: (id) => dispatch(addToCart(id)),
    //addToCart: (item) => dispatch(addToCartThunk(item, ownProps)),
});


AddItemsContainer.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AddItemsContainer);

//   componentDidMount() {
//     if (localStorage.ecommerce) {
//       try {
//         const cache = localStorage.getItem('ecommerce');
//         const {
//             name,
//             price,
//         } = JSON.parse(cache);

//         this.props.currentCart(name, price);

//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   componentDidUpdate() {
//     localStorage.setItem(
//       'ecommerce',
//       JSON.stringify({
//         name: this.props.name,
//         price: this.props.price,
//       })
//     );
//   }