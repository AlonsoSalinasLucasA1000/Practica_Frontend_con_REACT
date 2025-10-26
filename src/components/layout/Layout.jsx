import React from 'react'
import Header from '../Navbar/Header.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom';
import Footer from '../features/Footer.jsx'

const Layout = () => {
  return (
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout
