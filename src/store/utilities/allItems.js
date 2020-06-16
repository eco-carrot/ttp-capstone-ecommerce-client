import axios from "axios";

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
    .get("/api/items")
    .then((res) => res.data)
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
