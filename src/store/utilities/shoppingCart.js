import axios from 'axios';

// Shopping Cart
const FETCH_CART = 'FETCH_CART';
const ADD_TO_CART = 'ADD_TO_CART';

// Action Creator
const fetchAllItemsInCart = (items) => {
  return {
    type: FETCH_CART,
    payload: items,
  };
};

// export const addToCart = (id) => ({
//   type: ADD_TO_CART,
//   payload: id
// });


export const fetchAllItemsInCartThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/order_items/${id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .then((items) => dispatch(fetchAllItemsInCart(items)))
    .catch((err) => console.log(err));
};

  // export const addToCartThunk = (order) => (dispatch) => {
  //   return axios
  //     .post("/api/orders", order)
  //     .then((res) => res.data)
  //     .then((newOrder) => {
  //       //const tweakedOrder = { ...newOrder, items: [] };
  //       dispatch(addOrder(newOrder));
  //       //ownProps.history.push(`/orders/${newOrder.id}`);
  //     })
  //     .catch((err) => console.log(err));
  // };



const Reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CART:
      return action.payload
    case ADD_TO_CART:
      return [...state, action.payload]                 
    default:
        return state;
  }
};
export default Reducer;