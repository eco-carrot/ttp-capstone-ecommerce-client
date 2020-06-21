import axios from 'axios';
// const FETCH_ORDER = 'FETCH_ORDER';
const CREATE_ORDER = 'CREATE_ORDER';


// export const fetchOrder = (order) => {
//     return {
//       type: FETCH_ORDER,
//       payload: order,
//     };
//   };



export const createOrder = (order) => ({
    type: CREATE_ORDER,
    payload: order,
});

 

export const createOrderThunk = (ownProps) => (dispatch) => {
  return axios
    .post("/api/order")
    .then((res) => res.data)
    .then((newOrder) => {
      const tweakedOrder = { ...newOrder, items: [] };
      dispatch(createOrder(tweakedOrder));
      ownProps.history.push(`/order/${newOrder.id}`);
    })
    .catch((err) => console.log(err));
};

const Reducer = (state = [], action) => {
    switch (action.type) {
      case CREATE_ORDER:
        return [
        ...state,
        action.payload,
      ]                 
      default:
          return state;
    }
  };
  export default Reducer;