import './index.css';

export default function CartItems(props) {
    const { product,name,imageUrl,price,qty,removeCartHandler,qtyChangeHandler } = props
    return (
        <div className="cartItem-container p-5 flex justify-between items-center">
            <img src={imageUrl} alt="product name" className="cartItem-img"/>
            <p className="flex-1 text-center">{name}</p>
            <p className="flex-1 text-center">{price}元</p>
            <select className="flex-1 text-center" value={qty} onChange={(e)=>{qtyChangeHandler(product,e.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <div className="flex-1 text-center" onClick={()=>{removeCartHandler(product)}}><p className="cartItem-delete cursor-pointer mx-auto">delete</p></div>
        </div>
    )
}
