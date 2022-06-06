
import './App.css';
import Menu from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  console.log('nico')
  return (
    <>
      <Menu />
      <ItemListContainer  greeting={"Hola Mundo"} />
    </>
  )
}

export default App;
