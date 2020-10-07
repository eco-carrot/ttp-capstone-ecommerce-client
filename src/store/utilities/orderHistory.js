import axios from 'axios';
require('dotenv').config({ path: '../../../' })


const FETCH_ORDER_HISTORY = "FETCH_ORDER_HISTORY";


 export const fetchOrderHistory = (orderHistory) => {
     return {
       type: FETCH_ORDER_HISTORY,
       payload: orderHistory,
     };
   };


   export const fetchOrderHistoryThunk = (userId) => (dispatch) => {    
    return axios
      .post(process.env.REACT_APP_API_URL_PROD + `/api/orderHistory`, {userId})
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