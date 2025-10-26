import './App.css';
import ProductDetailPage from "./components/ProductDetail/ProductDetailPage.jsx"
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/features/Home.jsx';
import Layout from './components/layout/Layout.jsx';
import Terminos_y_condiciones from './components/features/Terminos_y_condiciones.jsx';
import Carrito from './components/features/Carrito.jsx';
import { CarritoProvider } from './components/context/CarritoContext.jsx';

function App() {

  return (
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* el index copia la ruta definida en el padre */}
            <Route path='/product/:id' 
              element={<ProductDetailPage />} />
            <Route path="terminos-condiciones" element={<Terminos_y_condiciones />} />
            <Route path="/carrito" element={<Carrito/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
