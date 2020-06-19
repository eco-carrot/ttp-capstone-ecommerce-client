import axios from 'axios';

// Shopping Cart
const FETCH_CART = 'FETCH_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const EDIT_ITEM_IN_CART = 'EDIT_ITEM_IN_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const CLEAR_FROM_CART = "CLEAR_FROM_CART";

// Action Creator
const fetchAllItemsInCart = (items) => {
  return {
    type: FETCH_CART,
    payload: items,
  };
};

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item
});

export const editItemInCart = (item) => ({
  type: EDIT_ITEM_IN_CART,
  payload: item
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id
});

export const clearFromCart = (id) => ({
  type: CLEAR_FROM_CART,
  payload: id
});

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

// creating a cart if user 
export const addToCartThunk = (item, ownProps) => (dispatch) => {
  return axios
    .post(`/api/order_items/`, item)
    .then((res) => res.data)
    .then((newCart) => {
      const updatedCart = { ...newCart};
      console.log(updatedCart.orderId);      
      dispatch(addToCart(updatedCart));
      ownProps.history.push(`/order_items/${newCart.id}`);
    })
    .catch((err) => console.log(err));
};

export const editQuantityThunk = (id, itemId, quantity)=>(dispatch)=>{
  return axios
    .put(`/api/order_items/${id}/${itemId}`, {quantity:quantity})
    .then((res) => res.data)
    .then((updatedQuantity) => {
      dispatch(editItemInCart(updatedQuantity));
    })
    .catch((err) => console.log(err));
}

export const  deleteItemFromCartThunk = (id,itemId) => (dispatch) => {
  return axios
    .delete(`/api/order_items/${id}/${itemId}`)
    .then((res) => res.data)
    .then(() => dispatch(removeFromCart(itemId)))
    .catch((err) => console.log(err));
};

export const clearFromCartThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/order_items/${id}/`)
    .then((res) => res.data)
    .then(() => dispatch(clearFromCart(id)))
    .catch((err) => console.log(err));
};

const Reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_CART:
      return action.payload
    case ADD_TO_CART:
      {
        const cartStatus = state.map((item) =>
        item.itemId === action.payload.itemId ? action.payload : item 
      );                  
      } 
    case EDIT_ITEM_IN_CART:
      return state.map((item) =>
        item.itemId === action.payload.itemId ? action.payload: item 
      ); 
    case REMOVE_FROM_CART:
      return state.filter((item) => item.itemId !== action.payload);  
    case CLEAR_FROM_CART:
      return state.filter((cart) => cart.id === action.payload)      
    default:
        return state;
        
  }
};
export default Reducer;