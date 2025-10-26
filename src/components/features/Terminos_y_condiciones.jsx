import React from 'react'
import terminosTexto from '../../mockData/terminos-condiciones.js'
import "../features/Terminos_y_condiciones.css"

const Terminos_y_condiciones = () => {
  return (
    <div className="terminos-y-condiciones-container">
      <h1 className='title'>Términos y Condiciones</h1>
      <p className="text">{terminosTexto}</p>
    </div>
  )
}

export default Terminos_y_condiciones
