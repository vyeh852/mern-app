import './index.css'

export default function Product() {
    return (
        <div className="detail-container p-5 flex flex-wrap md:jsutify-center">
           <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="product name" className="detail-img"/>
           <div className="detail-card p-5">
                <p className="detail-title">Product 1</p>
                <hr/>
                <p className="detail-price">2,000</p>
                <hr/>
                <p className="detail-desc">a a aaaadadad a a ddddad</p>
           </div>
           <div className="detail-card p-5">
                <div className="flex justify-between">
                    <p>price</p>
                    <p>2,000</p>
                </div>
                <hr/>
                <div className="flex justify-between">
                    <p>status</p>
                    <p>in stock</p>
                </div>
                <hr/>
                <div className="flex justify-between">
                    <p>quantity</p>
                    <select>
                        <option value="volvo">1</option>
                        <option value="saab">2</option>
                        <option value="fiat">3</option>
                        <option value="audi">4</option>
                    </select>
                </div>
                <div className="cursor-pointer bg-black text-white text-center">
                    <p>add to cart</p>
                </div>
           </div>
        </div>
    )
}
