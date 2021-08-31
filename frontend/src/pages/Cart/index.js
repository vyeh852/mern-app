import './index.css'
import CartItems from '../../components/CartItems';

export default function Cart() {
    return (
        <div className="cart-container p-5">
            <p className="cart-title font-bold text-xl">shopping-cart</p>
            <div className="flex flex-wrap">
                <div className="cartItems-container mt-5">
                    <CartItems/>
                    <CartItems/>
                </div>
                <div className="cart-card p-5">
                    <p className="cart-title">subtotal items</p>
                    <p className="cart-price">2,000</p>
                    <hr/>
                    <div className="cart-btn text-center cursor-pointer">
                        proceed to checkout
                    </div>
                </div>
            </div>
        </div>
    )
}
