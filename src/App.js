import './App.css';
import ProductDetailPage from "./components/ProductDetail/ProductDetailPage.jsx"
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './components/features/Home.jsx';
import Layout from './components/layout/Layout.jsx';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* el index copia la ruta definida en el padre */}
            <Route path='/product/:id' element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
