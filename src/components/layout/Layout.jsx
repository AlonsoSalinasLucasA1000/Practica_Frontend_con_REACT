import React, { useState,useEffect } from 'react'
import Header from '../Navbar/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer.jsx'
import { obtenerProductos, obtenerProductosLento, obtenerProductosSlowly } from '../services/productoServices.js';

const Layout = () => {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  
  const cargarProductos = async () => {
    const productosCargados = await obtenerProductosSlowly();
    setProductos(productosCargados);
    setProductosFiltrados(productosCargados);
    console.log("Productos cargados:", productosFiltrados);
  }

  useEffect(() => {
    cargarProductos();
  }, []);

  const filtrarProductos = (searchText) => {
    const productosFiltrados = productos.filter((producto) =>
      producto.titulo.toLowerCase().includes(searchText.toLowerCase())
    );
    setProductosFiltrados(productosFiltrados);
  }

  
  return (
      <div className="app_container"> 
        <Header></Header>
        <Navbar filtrarProductos={filtrarProductos}></Navbar>

        <div className="main_content">
          <Outlet context={{ productosFiltrados: productosFiltrados }}></Outlet>
        </div>

        <Footer></Footer>
      </div>
  )
}

export default Layout
