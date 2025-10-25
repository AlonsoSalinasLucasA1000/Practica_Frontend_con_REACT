import './App.css';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import ProductDetailPage from "./components/ProductDetailPage.jsx"

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
       {/* Acá idealmente debería ir una lista de productos, sin embargo, por ahora incluiremos una única pantalla de detalles de producto */}
      <ProductDetailPage id="68f451bb5149ce76784f2db0"></ProductDetailPage>
    </>
  );
}

export default App;
