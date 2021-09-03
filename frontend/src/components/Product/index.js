import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
export default function Product(props) {
    const{name,description,price,imageUrl,productId}=props;
    return (
        <div className="product-container">
        <img src={imageUrl} alt="product-name"/>
          <h2 className="product-name">{name}</h2>
          <p className="product-desc">{description}</p>
          <p className="product-price">{price}元</p>
            <Link to={`/product/${productId}`} className="product-btn text-center">
                view
            </Link>
        </div>
    )
}
