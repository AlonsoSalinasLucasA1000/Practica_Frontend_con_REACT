import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className="footer_container">
      <span className="copyright text">© 2023 Tienda Sol. Todos los derechos reservados.</span>
      <br/>
      <span> ——————————————— </span>
      <br />
      <span className="terminos-y-condiciones text">Términos y Condiciones</span>
      <br />
      <span> ——————————————— </span>
      <br />
      <span className="seguinos_en_redes text   ">Seguinos en:</span>
      <br/>
      <div className="redes_sociales">
        <div className="facebook">
            <FontAwesomeIcon icon={faFacebook} />
        </div>
        <div className="instagram">
            <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  )
}

export default Footer
