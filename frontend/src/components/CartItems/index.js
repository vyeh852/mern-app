import './index.css';

export default function CartItems(props) {
    const { product,name,imageUrl,price,qty,removeCartHandler,qtyChangeHandler } = props
    return (
        <div className="cartItem-container p-5 flex justify-between items-center">
            <img src={imageUrl} alt="product name" className="cartItem-img"/>
            <p>{name}</p>
            <p>{price}元</p>
            <select value={qty} onChange={(e)=>{qtyChangeHandler(product,e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div className="cartItem-delete cursor-pointer" onClick={()=>{removeCartHandler(product)}}>delete</div>
        </div>
    )
}
