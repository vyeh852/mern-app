import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import  {getProductsReducer,getProductDetailsReducer}  from "./reducers/product";

const reducer = combineReducers({
    products:getProductsReducer,
    details:getProductDetailsReducer
})

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(thunk))
);

export default store;