import axios from "axios";
require('dotenv').config({ path: '../../../' })

// ACTION TYPES
const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

// ACTION CREATORS
const getUser = user => { 
  return {
    type: GET_USER,
    payload: user
  }
}

const removeUser = () => { 
  return { 
    type: REMOVE_USER,     
  }
}


// THUNK CREATORS
export const me = () => async dispatch => {
  try {
    const res = await axios.get(process.env.REACT_APP_API_URL_PROD + "/auth/me", { withCredentials: true });
    dispatch(getUser(res.data || {}));
  }
  catch (err) {
    console.error(err);
  }
};

export const auth = (userObj, method) => async dispatch => {
  let res;
  
  try {
    res = await axios.post(process.env.REACT_APP_API_URL_PROD + `/auth/${method}`, 
        { lastName: userObj.lastName,
          firstName: userObj.firstName,
          email: userObj.email, 
          password: userObj.password,
          googleId: userObj.googleId}, { withCredentials: true });
  }
  catch (authError) {
    return dispatch(getUser({ error: authError }));
  }

  try {
    dispatch(getUser(res.data));
  }
  catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await dispatch(removeUser()); 
    await axios.post(process.env.REACT_APP_API_URL_PROD + `/auth/logout`, { withCredentials: true });  
  }
  catch (err) {
    console.error(err);
  }
};

// REDUCER
const reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case REMOVE_USER:
      return {};    
    default:
      return state;
  }
}

export default reducer;