import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrderThunk} from "../../thunks";


class OrderContainer extends Component {
 
  render() {
    return (
      <>
      {console.log("shopping cart",this.props.shoppingCart)}
      {console.log("allItems cart",this.props.allItems)}
      {(this.props.shoppingCart)?this.props.shoppingCart.map((item)=>
                  <div key={item.id}>
                    <h3>{item.id}</h3>
                  </div>):""}
      </>
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    shoppingCart: state.shoppingCart,
    allItems: state.allItems,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchOrder: (id) => dispatch(fetchOrderThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(OrderContainer);