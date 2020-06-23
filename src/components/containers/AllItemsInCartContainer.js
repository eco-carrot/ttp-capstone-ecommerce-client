import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {ToastContainer, toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

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

    
    const checkoutResponse = await cartCheckoutThunk(token, newOrderObject);
    await this.componentDidMount();
    
    if(checkoutResponse.status === 'success')
    {
      console.log("success");
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
        <div className={this.props.view?"greenView":"display-or-form"}><h1 className="title">Shopping Cart</h1></div>
        {this.props.user.id?
          <div>   
            <ToastContainer/>         
            {this.props.shoppingCart.length? 
            <div>              
              {this.state.inCheckout? <div className={this.props.view?"greenView":"display-or-form"}> Please wait while we complete your transaction...</div>:
                <div className={this.props.view?"greenView":"display-or-form"}> 
                  <div> 
                  <AllItemsInCartView
                    shoppingCart={this.props.shoppingCart}
                    allItems={this.props.allItems}
                    handledeleteitem={this.handledeleteitem}
                    view={this.props.view}
                    />
                  </div>          
                  <button className={this.props.view?"btn btn-dark btn-lg":""} onClick={()=>this.props.clearFromCart(this.state.orderId)}>Clear All Items From Cart</button>                  
                  <p ><StripeCheckout
                    stripeKey = {sKey}
                    token = {this.handleToken}
                    billingAddress
                    shippingAddress
                    amount = {this.getTotalCartAmount()}          
                  /></p>        
                </div>
              }
            </div>
            :
            <div className={this.props.view?"greenView":"display-or-form"}> Your Shopping Cart is empty</div>
            }
          </div> 
          :
          <div className={this.props.view?"greenView":"display-or-form"}><Link to="login" className="message-Link"> Please Log In to view your shopping cart</Link></div>}
         
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
    order: state.order,
    view: state.view
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
