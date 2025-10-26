import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer_container">
      <span className="copyright text">© 2023 Tienda Sol. Todos los derechos reservados.</span>
      <br/>
      <span> ——————————————— </span>
      <br />
      <Link to={`/terminos-condiciones`} className="terminos-y-condiciones-link"> 
        <span className="terminos-y-condiciones text">Términos y Condiciones</span>
      </Link>
      <br />
      <span> ——————————————— </span>
      <br />
      <span className="seguinos_en_redes text   ">Seguinos en:</span>
      <br/>
      <div className="redes_sociales">
        <div className="facebook">
          <Link to={`https://www.facebook.com/lucas.alonso.769059`}>
            <FontAwesomeIcon className="faFacebook" icon={faFacebook} />
          </Link>
        </div>
        <div className="instagram">
          <Link to={`https://www.instagram.com/super_lucas1000`}>
            <FontAwesomeIcon className="faInstagram" icon={faInstagram}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
