import TextField from '@mui/material/TextField'
import React from 'react'
import "./Carrito.css"
import { useState } from 'react'
import Button from '@mui/material/Button'
import { useCart } from '../context/CarritoContext.jsx';
import ButtonGroup from '@mui/material/ButtonGroup';

const Carrito = ({ }) => {

    const { agregarAlCarrito, restarDelCarrito, eliminarDelCarrito, limpiarCarrito } = useCart();

    const { carrito: productos_carrito } = useCart();
    
    const inicializarCampo = () => {
        return {
            valor: '',
            requerido: true,
        }
    }

    const inicializarCampos = () => ({
        nombre: inicializarCampo(),
        apellido: inicializarCampo(),
        email: inicializarCampo(),
        direccion: inicializarCampo(),
    })

    const [campos, setCampos] = useState(inicializarCampos());

    const valorDe = (nombreCampo) => {
        return campos[nombreCampo].valor;
    }
  
    const setValorDe = (nombreCampo, valor) => {
        setCampos({
            ...campos,
            [nombreCampo]: {
                ...campos[nombreCampo],
                valor: valor
            }
        });
    }

    const camposCompletos = Object.values(campos).every(campo => !campo.requerido || campo.valor.trim() !== '');

    const vaciarCampos = () => {
        setCampos(inicializarCampos());
    }

    const finalizarCompra = () => {
        // Lógica para finalizar la compra
        alert('Compra realizada con éxito!'); 
        vaciarCampos();
        limpiarCarrito();
    }

    return (
    <div className="carrito_container">
      <h2 className="titulo_pantalla">Carrito de Compras</h2>
      { (!productos_carrito || productos_carrito.length === 0) ? (
        <p className="text_sin_productos">No hay productos en el carrito.</p>
      ) : (
        <div className="carrito_content">
            <div className="productos_en_carrito">
                {productos_carrito.map((producto, index) => (
                    <div key={index} className="producto_carrito">
                        <img
                            src={producto.foto}
                            alt={producto.titulo}
                            className="imagen_producto_carrito"
                        />
                        <div className="detalles_producto_carrito">
                            <h3 className="titulo_producto_carrito">{producto.titulo}</h3>
                            <p className="precio_producto_carrito">{producto.precio} {producto.moneda}</p>
                        </div>
                        <ButtonGroup className="botones_cantidad" variant="outlined" aria-label="outlined button group">
                            <Button
                                size="small"
                                variant="outlined"
                                onClick={() => restarDelCarrito(producto.id)}
                                disabled={producto.cantidad === 1} // <-- ¡AÑADE ESTO!
                                >
                                -
                            </Button>
                            <Button disabled>{producto.cantidad}</Button>
                            <Button onClick={() => agregarAlCarrito(producto)}>+</Button>
                        </ButtonGroup>
                        <Button onClick={() => eliminarDelCarrito(producto)}
                            variant='contained'
                            style={{ backgroundColor: 'rgb(244, 67, 54)', color: 'white' }}>Eliminar</Button>
                    </div>
                ))}
            </div>

            <div className="total_carrito">
                <h3>Total: </h3>
                <span className="total">${productos_carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0)} </span>
            </div>

            <form className='form_carrito'>
                <TextField
                    className="name_carrito"
                    value={valorDe('nombre')}
                    onChange={(e) => setValorDe('nombre', e.target.value)}
                    label="Nombre"
                    variant="outlined"
                    required
                />
                <TextField
                    className="surname_carrito"
                    value={valorDe('apellido')}
                    onChange={(e) => setValorDe('apellido', e.target.value)}
                    label="Apellido"
                    variant="outlined"
                    required
                />
                <TextField
                    className="email_carrito"
                    value={valorDe('email')}
                    onChange={(e) => setValorDe('email', e.target.value)}
                    label="Email"
                    variant="outlined"
                    required
                />
                <TextField
                    className="address_carrito"
                    value={valorDe('direccion')}
                    onChange={(e) => setValorDe('direccion', e.target.value)}
                    label="Dirección"
                    variant="outlined"
                    required
                />

                <div className="accion_form">
                    <Button className="boton_cancelar" variant="contained" color="primary" onClick={() => {vaciarCampos()}}>
                        Cancelar
                    </Button>
                    <Button className="boton_finalizar" variant="contained" color="primary" disabled={!camposCompletos}
                    onClick={() => {finalizarCompra()}}>
                        Finalizar Compra
                    </Button>
                </div>
            </form>
        </div>
      )}
     </div>
    )
}

export default Carrito
