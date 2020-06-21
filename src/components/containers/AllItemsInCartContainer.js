import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import { fetchAllItemsInCartThunk, 
  fetchAllItemsThunk, 
  deleteItemFromCartThunk,
  clearFromCartThunk,   
  fetchOpenOrderThunk,
  cartCheckoutThunk} from "../../thunks";
import { AllItemsInCartView } from "../views";

class AllItemsInCartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        orderId: this.props.order.id,
        open: true,
        inCheckout: false,
        //we need to change this later on to match with appropriate user
    };
  }
  async componentDidMount() {
    
    await this.props.fetchOpenOrder(this.props.user.id);
    this.setState({orderId: this.props.order.id})
    await this.props.fetchAllItemsInCart(this.props.order.id);
    await this.props.fetchAllItems();        
    this.setState({inCheckout: false});
  }

  handledeleteitem=(id, itemId)=>{
    this.props.deleteItemFromCart(id, itemId);
  }  

  getTotalCartAmount = () =>{
    let totalCartAmount = 0;
    this.props.shoppingCart.map((item) => (
      totalCartAmount += (item.price * item.quantity)      
    ) );    

    return totalCartAmount;
  }

  createCart=()=>{
    this.props.createOrder();
  }

  //allows us to get data from transaction
  handleToken = async (token) => {
    this.setState({inCheckout: true});
    const newOrderObject = {
      name: this.state.orderId,
      price: ((this.getTotalCartAmount()/100).toFixed(2))
    }

    console.log(newOrderObject);
    const checkoutResponse = await cartCheckoutThunk(token, newOrderObject);
    await this.componentDidMount();
    console.log(checkoutResponse.status);
    if(checkoutResponse.status === 'success')
    {
      toast.success('Success! Check your email for details');      
    }
    else {
      toast.error('Something went wrong :(')
    }

  };

  render() {
    if (!this.state.open){
      this.createCart();
    }

    const sKey = "pk_test_51GwBqvHGbCAGvRQnT3TXxQaWpO2epJ1hvLM9Ca6FqN2ggZteGIqrDieMYfHey9qrMqRU8aICRqzSLFVG7dtlfpK600MOfpNC4Q";
    return (
      <div>
        {this.props.user.id?
          <div> 
            <ToastContainer/>
            {this.state.inCheckout? <div>Please wait while we complete your transaction...</div>:
              <div> 
                <table> 
                <AllItemsInCartView
                  shoppingCart={this.props.shoppingCart}
                  allItems={this.props.allItems}
                  handledeleteitem={this.handledeleteitem}
                  />
                </table>          
                <button onClick={()=>this.props.clearFromCart(this.state.orderId)}>Clear All Items From Cart</button>                  
                <StripeCheckout
                  stripeKey = {sKey}
                  token = {this.handleToken}
                  billingAddress
                  shippingAddress
                  amount = {this.getTotalCartAmount()}          
                />        
              </div>
            }
          </div> 
          :"Please Log In to view your shopping cart"}
         
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
