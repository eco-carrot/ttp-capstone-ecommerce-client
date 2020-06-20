import axios from "axios";

// Action Types
const FETCH_ORDER = "FETCH_ORDER";
const FETCH_OPEN_ORDER = "FETCH_OPEN_ORDER";
const CLEAR_ORDER = 'CLEAR_ORDER';


// Action Creators

const fetchOrder = (item) => {
  return {
    type: FETCH_ORDER,
    payload: item,
  };
};

const fetchOpenOrder = (item) => {
    return {
      type: FETCH_OPEN_ORDER,
      payload: item,
    };
  };

export const clearOrder = () => {
  return {
    type: CLEAR_ORDER,
  };
 };

 
  



// Thunk Creators
export const fetchOrderThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/orders/${id}`)
    .then((res) => res.data)
    .then((item) => dispatch(fetchOrder(item)))
    .catch((err) => console.log(err));
};

export const fetchOpenOrderThunk = (userId) => (dispatch) => {
    console.log(userId);
    return axios
      .get(`/api/user/${userId}/orders/open`)
      .then((res) => res.data)
      .then((item) => dispatch(fetchOpenOrder(item)))
      .catch((err) => console.log(err));
  };



// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ORDER:
      return action.payload;  
    case FETCH_OPEN_ORDER:
        return action.payload;  
    case CLEAR_ORDER:
        return {};   
    default:
      return state;
  }
};

export default reducer;
