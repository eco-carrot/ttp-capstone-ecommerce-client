import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllItemsInCartThunk, 
  fetchAllItemsThunk, 
  deleteItemFromCartThunk,
  clearFromCartThunk,   
fetchOpenOrderThunk} from "../../thunks";
import { AllItemsInCartView } from "../views";

class AllItemsInCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        orderId: this.props.order.id,
        open: true,
        //we need to change this later on to match with appropriate user
    };
  }
  async componentDidMount() {
    await this.props.fetchOpenOrder(this.props.user.id);
    this.setState({orderId: this.props.order.id})
    await this.props.fetchAllItemsInCart(this.props.order.id);
    await this.props.fetchAllItems();    
  }

  handledeleteitem=(id, itemId)=>{
    this.props.deleteItemFromCart(id, itemId);
  }

  submitOrder =()=>{
    this.setState({open:false})
  }

  createCart=()=>{
    this.props.createOrder();
  }

  render() {
    if (!this.state.open){
      this.createCart();
    }
    return (
      <div>
        {this.props.user.id?
          <div> 
             <table> 
              <AllItemsInCartView
                shoppingCart={this.props.shoppingCart}
                allItems={this.props.allItems}
                handledeleteitem={this.handledeleteitem}
                />
          </table>          
          <button onClick={()=>this.props.clearFromCart(this.state.orderId)}>Clear All Items From Cart</button>
          <button onClick={this.submitOrder}>Submit Order</button>            
          </div>
          :"Please Log In to view you shopping cart"}
         
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {
    shoppingCart: state.shoppingCart,
    allItems: state.allItems,
    user: state.user,
    order: state.order
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchAllItemsInCart: (id) => dispatch(fetchAllItemsInCartThunk(id)),
    fetchAllItems: () => dispatch(fetchAllItemsThunk()),
    deleteItemFromCart: (id, itemId) => dispatch(deleteItemFromCartThunk(id, itemId)),
    clearFromCart:(id)=> dispatch(clearFromCartThunk(id)),
    fetchOpenOrder: (id) => dispatch(fetchOpenOrderThunk(id))
  };
};

// Type check props;
AllItemsInCartContainer.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  fetchAllItemsInCart: PropTypes.func.isRequired,
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(AllItemsInCartContainer);
