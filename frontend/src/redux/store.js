import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import  {getProductsReducer}  from "./reducers/product";

const reducer = combineReducers({
    products:getProductsReducer
})

const store = createStore(
    reducer,composeWithDevTools(applyMiddleware(thunk))
);

export default store;