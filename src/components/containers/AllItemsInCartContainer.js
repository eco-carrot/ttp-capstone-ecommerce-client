import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsInCartThunk, fetchAllItemsThunk, deleteItemFromCartThunk, clearFromCartThunk} from "../../thunks";
import { AllItemsInCartView } from "../views";

class AllItemsInCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        orderId:1,
        //we need to change this later on to match with appropriate user
    };
  }
  componentDidMount() {
    this.props.fetchAllItemsInCart(this.props.match.params.id);
    this.props.fetchAllItems();
  }

  handledeleteitem=(id, itemId)=>{
    this.props.deleteItemFromCart(id, itemId);
  }

  render() {
    return (
      <div>
        <table> 
          {console.log("shoppingCartttt", this.props.shoppingCart)}
            <AllItemsInCartView
              shoppingCart={this.props.shoppingCart}
              allItems={this.props.allItems}
              handledeleteitem={this.handledeleteitem}
              />
        </table>
        <button onClick={()=>this.props.clearFromCart(this.state.orderId)}>Clear All Items From Cart</button>
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
    deleteItemFromCart: (id, itemId) => dispatch(deleteItemFromCartThunk(id, itemId)),
    clearFromCart:(id)=> dispatch(clearFromCartThunk(id))
  };
};

// Type check props;
AllItemsInCartContainer.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  fetchAllItemsInCart: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllItemsInCartContainer);
