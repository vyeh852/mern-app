import {GET_PRODUCTS_REQUEST,GET_PRODUCTS_SUCCESS,GET_PRODUCTS_FAIL} from '../constants';

export const getProducts = () => async (dispatch) => {
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
