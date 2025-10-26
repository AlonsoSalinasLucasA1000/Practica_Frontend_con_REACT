import React from 'react'
import productos  from "../../mockData/productos.js"
import ProductCarouselItem from '../ProductCarousel/ProductCarouselItem.jsx'
import "./ProductCarousel.css"

const ProductCarousel = () => {
  return (
    <div className="product-carousel">
      <div className="main-text">
        <h1><b>Productos Destacados</b></h1>
      </div>
      <div className="product-list">
        {productos.map((producto) => (
          <ProductCarouselItem key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

export default ProductCarousel
