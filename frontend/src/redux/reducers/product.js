import {GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL} from '../constants';

export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case GET_PRODUCTS_REQUEST:
          console.log("req");
        return {
          loading: true,
          products: [],
        };
      case GET_PRODUCTS_SUCCESS:
        console.log("succes");
        return {
          products: action.payload,
          loading: false,
        };
      case GET_PRODUCTS_FAIL:
        console.log("fail");
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };