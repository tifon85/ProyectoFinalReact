import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Menu from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart.jsx';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  console.log('nico')
  return (
    <BrowserRouter>{/*dentro de este componente voy a poder usar funciones de react-router-dom*/}
      <Menu />
      <Routes>{/*dentro estan todos los componentes que quiero que tengan una ruta, o sea, elementos que sean vista*/}
        <Route path="/" element={<ItemListContainer/>}/>{/*Lo que hace es vincular la ruta con el elemento*/}
        <Route path="/categorias/:categoriaId" element={<ItemListContainer/>}/>
        <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path="*" element={<Navigate to="/" />}/>{/*En caso de que coloquen cualquier ruta que no exista, te redirige al elemento principal*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
