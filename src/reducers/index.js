import { combineReducers }  from 'redux';

import products from './products';
import cartReducer from './cart';

const rootReducer = combineReducers ({
    products: products,
    cartArr:cartReducer
})

export default rootReducer;