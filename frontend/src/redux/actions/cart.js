import { ADD_TO_CART,REMOVE_FROM_CART } from '../constants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const data = await fetch(`http://localhost:5000/api/products/${id}`);
    const jsonData = await data.json();
    console.log(id,qty)
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: jsonData._id,
        name: jsonData.name,
        imageUrl: jsonData.imageUrl,
        price: jsonData.price,
        countInStock: jsonData.countInStock,
        qty,
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