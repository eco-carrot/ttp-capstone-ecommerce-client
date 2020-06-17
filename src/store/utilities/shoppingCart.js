import axios from 'axios';

const ADD_TO_CART = 'ADD_TO_CART';
const CURRENT_CART = 'CURRENT_CART';


export const addToCart = ( name, price) => ({
    type: ADD_TO_CART,
    name,
    price, 
});

export const currentCart = ( name, price) => ({
    type: CURRENT_CART,
    name,
    price, 
});

const Reducer = (state = [], action) => {
switch (action.type) {
    case CURRENT_CART:
        return {
            ...state,
            price: action.price,
            transactions: action.transactions,
          };
    case ADD_TO_CART:
            return [...state, {
                name: action.name,
                price: action.price,
            }]
    default:
        return state;
    }
};
export default Reducer;
