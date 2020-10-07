import axios from "axios";
require('dotenv').config({ path: '../../../' })

// ACTION TYPES;
const FETCH_ALL_ITEMS = "FETCH_ALL_ITEMS";

// ACTION CREATORS;
const fetchAllItems = (items) => {
  return {
    type: FETCH_ALL_ITEMS,
    payload: items,
  };
};

// THUNK CREATORS;
export const fetchAllItemsThunk = () => (dispatch) => {
  return axios
    .get(process.env.REACT_APP_API_URL_PROD +  "/api/items")
    .then((res) => {
      
      return res.data;
    
    })
    .then((items) => dispatch(fetchAllItems(items)))
    .catch((err) => console.log(err));
};

// REDUCER;
const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
