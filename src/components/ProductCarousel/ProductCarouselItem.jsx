import React from 'react'
import "./ProductCarouselItem.css"
import { Link } from 'react-router-dom';

const ProductCarouselItem = ({ producto }) => {
  return (
    <div key={producto.id} className="product-item">
        <div className="product-card">
            <img 
                src={producto.foto} 
                alt={producto.titulo} 
                />
            <div className="product-info">
                <h3>{producto.titulo}</h3>
                <span className="price">${producto.precio}</span>
                <span className="stock">Stock: {producto.stock}</span>
            </div>
            <div className="ver-mas-button">
                <span className="ver-mas-text">
                  <Link to={`/product/${producto.id}`} className="ver-mas">Ver más</Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ProductCarouselItem
