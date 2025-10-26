import React from 'react'
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className="searchBar">
        <div className="bagShopping">
            <FontAwesomeIcon icon={faBagShopping} />
        </div>
        <input
            type="text"
            className="search_input"
            placeholder='¿Qué querés comprar?'>
        </input>
        <button className="botonBusqueda">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    </div>
  )
}

export default SearchBar
