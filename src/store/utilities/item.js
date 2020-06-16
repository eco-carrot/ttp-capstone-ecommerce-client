import axios from "axios";

// Action Types
const FETCH_ITEM = "FETCH_ITEM";

// Action Creators

const fetchItem = (item) => {
  return {
    type: FETCH_ITEM,
    payload: item,
  };
};

// Thunk Creators
export const fetchItemThunk = (id) => (dispatch) => {
  return axios
    .get(`/api/items/${id}`)
    .then((res) => res.data)
    .then((item) => dispatch(fetchItem(item)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
