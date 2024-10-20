import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='container-app'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Cambiar los componentes anidados */}
          <Route path="/" element={<ItemListContainer saludo="Bienvenidos a Volanda" />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo="Categorías" />} />
          <Route path="/detail/:idProduct" element={<ItemListContainer saludo="Detalles del Producto" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
