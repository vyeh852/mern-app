import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from '../../redux/actions/product';
import './index.css';

export default function Product(props) {
    const dispatch = useDispatch();
    const { id }=props.match.params;
    const { product, loading, error} = useSelector((state)=>{return state.details});
    const { _id, name, description, price, countInStock, imageUrl} = product;

    useEffect(()=>{
        dispatch(getProductDetails(id))
    },[]);
    return (
        <div className="detail-container p-5 flex flex-wrap md:jsutify-center">
            {loading?<h2>loading...</h2>:
            error?<h2>error</h2>:
            (<>
                <img src={imageUrl} alt="product name" className="detail-img"/>
                <div className="detail-card p-5">
                    <p className="detail-title">{name}</p>
                    <hr/>
                    <p className="detail-price">{price}元</p>
                    <hr/>
                    <p className="detail-desc">{description}</p>
                </div>
                <div className="detail-card p-5">
                    <div className="flex justify-between">
                        <p>price</p>
                        <p>{price}</p>
                    </div>
                    <hr/>
                    <div className="flex justify-between">
                        <p>status</p>
                        <p>{countInStock} {countInStock > 0 ? "In Stock" : "Out of Stock"}</p>
                    </div>
                    <hr/>
                    <div className="flex justify-between">
                        <p>quantity</p>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div className="cursor-pointer bg-black text-white text-center">
                        <p>add to cart</p>
                    </div>
                </div>
            </>)
            }
           
        </div>
    )
}
