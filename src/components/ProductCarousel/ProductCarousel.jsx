import React from 'react'
import ProductCarouselItem from '../ProductCarousel/ProductCarouselItem.jsx'
import "./ProductCarousel.css"
import Skeleton from '@mui/material/Skeleton';

const ProductCarousel = ({productos}) => {

  return (
    <div className="product-carousel">
      <div className="main-text">
        <h1><b>Productos Destacados</b></h1>
      </div>

      {!productos.length ?
        <div className="loading">
          <Skeleton variant="rectangular1" width={210} height={118}/>
          <Skeleton variant="rectangular2" width={210} height={118}/>
          <Skeleton variant="rectangular3" width={210} height={118}/>
        </div>
        :
        <div className="product-list">
          {productos.map((producto) => (
            <ProductCarouselItem key={producto.id} producto={producto} />
          ))}
        </div>
      }
    </div>
  )
}

export default ProductCarousel
