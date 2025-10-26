import React, { createContext, useState, useContext } from 'react';

const CarritoContext = createContext();

export const useCart = () => {
    const context = useContext(CarritoContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CarritoProvider');
    }
    return context;
};

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

        // 1. FUNCIÓN PARA AGREGAR (O SUMAR)
    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
        // Buscamos si el producto (por su id) ya está en el carrito
        const itemExistente = prevCarrito.find(item => item.id === producto.id);

        if (itemExistente) {
            // Si existe, mapeamos y le sumamos 1 a la cantidad
            return prevCarrito.map(item =>
            item.id === producto.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            );
        } else {
            // Si no existe, lo agregamos al array con cantidad 1
            return [...prevCarrito, { ...producto, cantidad: 1 }];
        }
        });
    };

    // 2. FUNCIÓN PARA RESTAR
    const restarDelCarrito = (productoId) => {
        setCarrito(prevCarrito => {
        const itemExistente = prevCarrito.find(item => item.id === productoId);

        // Si la cantidad es 1, lo filtramos (eliminamos)
        if (itemExistente.cantidad === 1) {
            return prevCarrito.filter(item => item.id !== productoId);
        } else {
            // Si es > 1, mapeamos y restamos 1
            return prevCarrito.map(item =>
            item.id === productoId
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            );
        }
        });
    };

    const eliminarDelCarrito = (producto) => {
        setCarrito(prevCarrito => {
            return prevCarrito.filter(item => item.id !== producto.id);
        });
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    }

    const value = {
        carrito,
        agregarAlCarrito,
        restarDelCarrito,
        limpiarCarrito,
        eliminarDelCarrito
    };

    return (
        <CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    );
}