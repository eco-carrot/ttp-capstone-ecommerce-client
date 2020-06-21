import axios from 'axios';

const FETCH_ORDER_HISTORY = "FETCH_ORDER_HISTORY";


 export const fetchOrderHistory = (orderHistory) => {
     return {
       type: FETCH_ORDER_HISTORY,
       payload: orderHistory,
     };
   };


   export const fetchOrderHistoryThunk = (userId) => (dispatch) => {    
    return axios
      .post(`/api/orderHistory`, {userId})
      .then((res) => res.data)
      .then((orderHistory) => dispatch(fetchOrderHistory(orderHistory)))
      .catch((err) => console.log(err));
  };


const Reducer = (state = [], action) => {
    switch (action.type) {          
      case FETCH_ORDER_HISTORY:
        return action.payload;        
      default:
          return state;
    }
  };
  export default Reducer;