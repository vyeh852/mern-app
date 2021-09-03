import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import  {getProductsReducer,getProductDetailsReducer}  from "./reducers/product";
import {cartReducer} from "./reducers/cart";

const reducer = combineReducers({
    products:getProductsReducer,
    details:getProductDetailsReducer,
    cart:cartReducer
})

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(thunk))
);

export default store;