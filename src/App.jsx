
import './App.css';
import Menu from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  console.log('nico')
  return (
    <>
      <Menu />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </>
  )
}

export default App;
