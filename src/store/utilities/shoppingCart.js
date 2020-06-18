import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';
const FETCH_ORDER = 'FETCH_ORDER';
const ADD_ORDER = 'ADD_ORDER';


export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id
});


export const addOrder = (order) => ({
    type: ADD_ORDER,
    payload: order,
});

export const fetchOrder = (order) => {
    return {
      type: FETCH_ORDER,
      payload: order,
    };
  };

  export const fetchOrderThunk = (id) => (dispatch) => {
    return axios
      .get(`/api/orders/${id}`)
      .then((res) => res.data)
      .then((order) => dispatch(fetchOrder(order)))
      .catch((err) => console.log(err));
  };
  export const addToCartThunk = (order) => (dispatch) => {
    return axios
      .post("/api/orders", order)
      .then((res) => res.data)
      .then((newOrder) => {
        //const tweakedOrder = { ...newOrder, items: [] };
        dispatch(addOrder(newOrder));
        //ownProps.history.push(`/orders/${newOrder.id}`);
      })
      .catch((err) => console.log(err));
  };

// export const addOrderThunk = (order, ownProps) => (dispatch) => {
//   return axios
//     .post("/api/orders", order)
//     .then((res) => res.data)
//     .then((newOrder) => {
//       const tweakedOrder = { ...newOrder, items: [] };
//       dispatch(addOrder(tweakedOrder));
//       ownProps.history.push(`/orders/${newOrder.id}`);
//     })
//     .catch((err) => console.log(err));
// };

const Reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [
      ...state,
      action.payload,
    ]
    case ADD_TO_CART:
      return [
        ...state, 
        action.payload
      ]                 
    default:
        return state;
  }
};
export default Reducer;