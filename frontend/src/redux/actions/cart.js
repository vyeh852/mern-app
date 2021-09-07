import { ADD_TO_CART,REMOVE_FROM_CART } from '../constants';

export const addToCart = (obj) => (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: obj.id,
        name: obj.name,
        imageUrl: obj.imageUrl,
        price: obj.price,
        qty:obj.qty
      },
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
    });
  
    localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
  };