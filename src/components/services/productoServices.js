import Productos from "../../mockData/productos.js";

export const obtenerProductos = () => {
    // Simula una llamada a una API o base de datos
    return Productos;
}

export const obtenerProductosSlowly = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve(Productos)
  }, 5000)
})
    