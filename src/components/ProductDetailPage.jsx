import React from 'react'
import Productos  from "../mockData/productos.js"
import notFoundProduct from "../pictures/pageDesign/404.png"
import "./ProductDetailPage.css"

const ProductDetailPage = (props) => {
    const id = props.id;
    const producto = Productos.find(p => p.id === id);

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

    return(
        <div className="cajaPrincipalProducto">
            <h1 className="nameProduct">{producto.titulo}</h1>

            <h4 className="sellerName">{producto.vendedor}</h4>

            <img
                src={producto.foto}
                alt={producto.titulo}
                className="productoPicture"
            />
        </div>

    )
}

export default ProductDetailPage
