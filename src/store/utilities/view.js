
// ACTION TYPES;
const CHANGE_VIEW = "CHANGE_VIEW";

// ACTION CREATORS;
export const changeView = (view) => {
  return {
    type: CHANGE_VIEW,
    payload: view,
  };
};

// REDUCER;
const reducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;