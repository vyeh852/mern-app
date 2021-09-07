import CartItems from '../../components/CartItems';
import { useDispatch,useSelector } from 'react-redux';
import { removeFromCart,addToCart } from '../../redux/actions/cart';
import './index.css';

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => {return state.cart});
    const { cartItems } = cart;
    // console.log(localStorage.getItem('cart'))
    console.log(cartItems)

    const subtotalItems = cartItems.reduce((pre,cur)=>{return pre+cur.qty*1},0)
    const totalCash = cartItems.reduce((pre,cur)=>{return pre+(cur.qty*1*cur.price)},0)
    console.log(totalCash)
    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
      };
    const removeCartHandler = (id)=>{
        dispatch(removeFromCart(id))
    }

    return (
        <div className="cart-container p-5">
            <p className="cart-title font-bold text-xl">shopping-cart</p>
            <div className="flex flex-wrap justify-between">
                <div className="cartItems-container mt-5">
                    {cartItems.map((e)=>{return  <CartItems key={e.product} name={e.name} imageUrl={e.imageUrl} price={e.price} qty={e.qty} product={e.product} removeCartHandler={removeCartHandler} qtyChangeHandler={qtyChangeHandler}/>})}
                </div>
                <div className="cart-card p-5">
                    <p className="cart-title">subtotal items:  {subtotalItems}</p>
                    <p className="cart-price">共{totalCash}元</p>
                    <div className="cart-btn text-center cursor-pointer my-3">
                        proceed to checkout
                    </div>
                </div>
            </div>
        </div>
    )
}
