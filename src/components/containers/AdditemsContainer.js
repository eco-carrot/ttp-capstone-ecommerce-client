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
        total: 0,
    };
  }


  handleAddToCart=( name, price)=>{
    this.setState({name,price})
    this.props.addToCart( name, price);
  }

  render() {
    return (
      <>
        <AddItemsView name={this.props.name} price={this.props.price} itemId={this.props.itemId} handleAddToCart={this.handleAddToCart}/>
        
      </>
    );
  }
}
const mapState = (state) => {
    return {
      shoppingCart: state.shoppingCart,
    };
  };

const mapDispatch = dispatch => ({
    addToCart: ( name, price) => dispatch(addToCart( name, price)),
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