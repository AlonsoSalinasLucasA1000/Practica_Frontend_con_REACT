import React, { use } from 'react'
import Productos  from "../../mockData/productos.js"
import notFoundProduct from "../../pictures/pageDesign/404.png"
import "./ProductDetailPage.css"
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useCart } from '../context/CarritoContext.jsx';
import { useNavigate } from 'react-router-dom';

const ProductDetailPage = () => {
    const { id } = useParams(); // Obtener el ID del producto desde los parámetros de la URL
    const producto = Productos.find(p => p.id === id);
    const { agregarAlCarrito } = useCart();

    const navigate = useNavigate();

    const handleAgregarYRedirigir = (producto) => {
        agregarAlCarrito(producto);
        navigate('/carrito');
    };

    if( !producto ) /* Renderizado condicional, en caso de no existir, devuelve una cosa diferente.*/
    {
        return(
            <div className="notFoundProduct">
                <img 
                    src={notFoundProduct}
                    alt="Producto no encontrado"
                    className="logo_notFound"
                />
                <h2 className="emptyMessage">
                    Lo sentimos, no se ha encontrado el producto.
                </h2>
            </div>
        )
    }

   {/* A partir de esta parte, por cuestiones de rapidez recurrí a IA.
     Esta opta por separar la imagen y el resto de elementos en cajas distintas
     
     Esta decisión es muy útil a la hora de usar flex, ya que son elementos separados que se pueden enfilar.
     TENERLO EN CUENTA A FUTURO.
     */} 
    return(
        <div className="cajaPrincipalProducto">
            <img
                src={producto.foto}
                alt={producto.titulo}
                className="productoPicture"
            />
            
            <div className="productoInfo">
                <h1 className="nameProduct">{producto.titulo}</h1>
                <h4 className="sellerName">{producto.vendedor}</h4>
                <h5 className="categoriaName">{producto.categorias[0]}</h5>
                <p className="descripcion">{producto.descripcion}</p>
                <div className="precioStructure">
                    <h2 className = "precio">{producto.precio}</h2>
                    <span className="moneda">{producto.moneda}</span>
                        <Button 
                            variant="contained" 
                            style={{ backgroundColor: 'rgb(80, 134, 235)', color: 'white' }} 
                            className="botonAgregarCarrito"
                            onClick={() => handleAgregarYRedirigir(producto)}
                        >
                            Agregar al Carrito
                        </Button>
                </div>               
            </div>
        </div>
    )
}

export default ProductDetailPage
