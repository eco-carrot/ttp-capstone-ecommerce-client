import axios from "axios";

// Action Types
const FETCH_ITEM = "FETCH_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const EDIT_ITEM = "EDIT_ITEM";
const ADD_ITEM = "ADD_ITEM";

// Action Creators

const fetchItem = (item) => {
  return {
    type: FETCH_ITEM,
    payload: item,
  };
};

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

const editItem = (item) => {
  return {
    type: EDIT_ITEM,
    payload: item,
  };
};

const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id,
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

export const addItemThunk = (item, ownProps) => (dispatch) => {
  return axios
    .post("/api/items", item)
    .then((res) => res.data)
    .then((newItem) => {
      const tweakedItem = { ...newItem};
      dispatch(addItem(tweakedItem));
      ownProps.history.push(`/items/${newItem.id}`);
    })
    .catch((err) => console.log(err));
};

export const editItemThunk = (id, item) => (dispatch) => {
  return axios
    .put(`/api/items/${id}`, item)
    .then((res) => res.data)
    .then((updatedItem) => {
      dispatch(editItem(updatedItem));
    })
    .catch((err) => console.log(err));
};

export const deleteItemThunk = (id) => (dispatch) => {
  return axios
    .delete(`/api/items/${id}`)
    .then((res) => res.data)
    .then(() => dispatch(deleteItem(id)))
    .catch((err) => console.log(err));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      return action.payload;
    case ADD_ITEM:
      return [...state, action.payload];
    case EDIT_ITEM:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case DELETE_ITEM:
      console.log(action.payload);
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
