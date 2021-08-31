import './index.css';

export default function CartItems() {
    return (
        <div className="cartItem-container p-5 flex justify-between items-center">
            <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" className="cartItem-img"/>
            <p>product 1</p>
            <p>2,000</p>
            <select>
                <option value="volvo">1</option>
                <option value="saab">2</option>
                <option value="fiat">3</option>
                <option value="audi">4</option>
            </select>
            <div className="cartItem-delete cursor-pointer">delete</div>
        </div>
    )
}
