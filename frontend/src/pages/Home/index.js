import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/product";
import Product from "../../components/Product"
import './index.css'
export default function Home() {
    const dispatch = useDispatch();

    const getProducts = useSelector((state) => {return state.products});
    const { products, loading, error } = getProducts;
    const [ isAuth,setIsAuth ] = useState(false);
    const token = localStorage.getItem("auth")
    console.log(token)
   
    // console.log(getProducts);
    // console.log(products,loading,error);
    useEffect(() => {
      dispatch(listProducts());
    }, [dispatch]);
    useEffect(async()=>{
      const token = localStorage.getItem("auth");
      try {
        let res = await fetch("http://localhost:5000/api/private",{ 
          headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        })
      })
      console.log(res)
      } catch (error) {
        console.log(error)
      }
    },[])
    return (
        <div className="home-list flex flex-wrap p-5">
          {loading?<h2>loading...</h2>:
          error?<h2>error</h2>:
          (products.map((e)=>{return <Product key={e._id} name={e.name} description={e.description} price={e.price} imageUrl={e.imageUrl} productId={e._id}/>}))
          }
        </div>
    )
}
