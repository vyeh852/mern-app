import {GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL,GET_PRODUCT_DETAILS_REQUEST,GET_PRODUCT_DETAILS_SUCCESS,GET_PRODUCT_DETAILS_FAIL,GET_PRODUCT_DETAILS_RESET} from '../constants';

export const getProducts = () => async (dispatch,getState) => {
  //整包redux中的state
  console.log(getState());
    try {
      dispatch({ type: GET_PRODUCTS_REQUEST });
  
      const data = await fetch("http://localhost:5000/api/products");
      const jsonData = await data.json();

      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: jsonData,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCTS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const getProductDetails = (id) => async (dispatch)=>{
    try {
        dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    
        const data = await fetch(`http://localhost:5000/api/products/${id}`);
        const jsonData = await data.json();
  
        dispatch({
          type: GET_PRODUCT_DETAILS_SUCCESS,
          payload: jsonData,
        });
      } catch (error) {
        dispatch({
          type: GET_PRODUCT_DETAILS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
  }

  export const removeProductDetails = () => (dispatch)=>{
      dispatch({ type:GET_PRODUCT_DETAILS_RESET })
  }