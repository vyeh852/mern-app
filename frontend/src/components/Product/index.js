import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
export default function Product() {
    return (
        <div className="product-container">
        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"  alt="product-name"/>
          <h2 className="product-name">Product 1</h2>
          <p className="product-desc">assa sasas sasasa sasasa</p>
          <p className="product-price">2,000元</p>
            <Link to={`/product/${12}`} className="product-btn text-center">
                view
            </Link>
        </div>
    )
}
