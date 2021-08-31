import Product from "../../components/Product"
import './index.css'
export default function Home() {
    return (
        <div className="home-list flex flex-wrap p-5">
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           <Product/>
        </div>
    )
}
