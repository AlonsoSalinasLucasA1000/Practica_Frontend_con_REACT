import React from 'react'
import Header from '../Navbar/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import ProductCarousel from '../ProductCarousel/ProductCarousel.jsx'
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom';

const Home = ({ }) => {
  
  const { productosFiltrados } = useOutletContext();

  return (
    <div>
        <ProductCarousel productos={productosFiltrados} />
    </div>
  )
}

export default Home
