import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchOrderHistoryThunk } from "../../thunks";
import { OrderHistoryView } from "../views";
import {Link} from "react-router-dom"

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
        <div className={this.props.view?"greenView":"display-or-form"}><h1 className="title">Order History</h1> </div>
        {this.props.user.id?
          <div>            
              <div> 
                <table> 
                <OrderHistoryView
                  orderHistory={this.props.orderHistory}
                  view={this.props.view}                   
                  />
                </table>   
              </div>
          </div> 
          :<div className={this.props.view?"greenView":"display-or-form"}><Link to="login" className="message-Link">Please Log In to see your order history</Link></div>}
      </div>
    );
  }
}

// Map state to props;
const mapState = (state) => {
  return {    
    user: state.user,
    orderHistory: state.orderHistory,
    view: state.view
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
