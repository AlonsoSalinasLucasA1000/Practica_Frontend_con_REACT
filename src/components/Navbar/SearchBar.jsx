import React, { use } from 'react'
import "./SearchBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const SearchBar = ({filtrarProductos}) => {
  const [searchText, setSearchText] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault();
    filtrarProductos(searchText);
  }

  return (
    <form className="searchBar" onSubmit={handleSearch}>
        <div className="bagShopping">
            <FontAwesomeIcon icon={faBagShopping} />
        </div>
        <input
            type="text"
            value={searchText}
            onChange={(e) => {console.log(searchText); setSearchText(e.target.value); }}
            className="search_input"
            placeholder='¿Qué querés comprar?'>
        </input>
        <button className="botonBusqueda" onClick={() => filtrarProductos(searchText)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    </form>
  )
}

export default SearchBar
