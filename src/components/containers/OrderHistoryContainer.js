import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchOrderHistoryThunk } from "../../thunks";
import { OrderHistoryView } from "../views";

class OrderHistoryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        orderHistory: []       
    };
  }
  async componentDidMount() {    
    
    await this.props.fetchOrderHistory(this.props.user.id);
    this.setState({orderHistory: this.props.orderHistory});    
  }  

  render() {    
    return (
      <div>
          <h1>Order History</h1>  
        {this.props.user.id?
          <div>    
                        
              <div> 
                <table> 
                <OrderHistoryView
                  orderHistory={this.props.orderHistory}                  
                  />
                </table>          
                              
                       
              </div>
            
          </div> 
          :"Please Log In to see your order history"}
         
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {    
    user: state.user,
    orderHistory: state.orderHistory
  };
};

// Map dispatch to props;
const mapDispatch = (dispatch) => {
  return {
    fetchOrderHistory: (userId) => dispatch(fetchOrderHistoryThunk(userId)),    
  };
};

// Type check props;
OrderHistoryContainer.propTypes = {
  user: PropTypes.object.isRequired,
  fetchOrderHistory: PropTypes.func.isRequired,
  orderHistory: PropTypes.array.isRequired
};

// Export our store-connected container by default;
export default connect(mapState, mapDispatch)(OrderHistoryContainer);
