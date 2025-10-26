import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons'
import  tiendaSolLogo  from "../../pictures/pageDesign/logo.png"
import "./Navbar.css"
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

const Navbar = ({ filtrarProductos }) => {
  return (
    <>
        <div className='navbar_fondo'>
            <nav>
                <div className="navbar_section_left">
                    <button className="menu_icon nav-button">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <SearchBar className="searchBar" filtrarProductos={filtrarProductos}></SearchBar>
                </div>
               
                    <Link to={`/`} className="tiendaSolLogo">
                        <img 
                            src={tiendaSolLogo}
                            alt="Logo de Tienda Sol"
                            className="logo"
                        />
                        <span to={`/`} className="tiendaSolTitulo">Tienda Sol</span>
                    </Link> 

                <div className="navbar_section_right">
                    <button className="cart nav-button">
                       <FontAwesomeIcon icon={faCartShopping} />
                       <span className="cart_count">0</span>
                    </button>

                    <button className="notifications nav-button">
                        <FontAwesomeIcon icon={faBell} />
                    </button>

                    <button className="user nav-button">
                        <FontAwesomeIcon icon={faUser} />
                    </button>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Navbar
