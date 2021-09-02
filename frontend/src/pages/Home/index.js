import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/product";
import Product from "../../components/Product"
import './index.css'
export default function Home() {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => {return state.products});
    const { products, loading, error } = getProducts;
    console.log(getProducts)
    // console.log(getProducts);
    // console.log(products,loading,error);
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
    return (
        <div className="home-list flex flex-wrap p-5">
           {products.map((e)=>{return <Product key={e._id} name={e.name} description={e.description} price={e.price} imageUrl={e.imageUrl} productId={e._id}/>})}
        </div>
    )
}
