import React from 'react'
import Header from '../Navbar/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer.jsx'

const Layout = () => {
  return (
      <div className="app_container"> 
        <Header></Header>
        <Navbar></Navbar>

        <div className="main_content">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
  )
}

export default Layout
