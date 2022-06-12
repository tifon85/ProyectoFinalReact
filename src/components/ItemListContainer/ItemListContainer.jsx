
import {useState} from 'react';
import { useEffect } from 'react'
import { getFetch } from '../../api/productos.js';
import ItemCount from '../ItemCount/ItemCount.jsx'
import ItemList from '../ItemList/ItemList.jsx'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const onAdd = (cantidad) => {
    console.log(cantidad)
  }

  useEffect(()=>{
    getFetch()//llama a la api
    .then((resp)=> {
      setProductos(resp)
      setLoading(false)
    })
    .catch(err => console.log(err))
    .finally(()=>console.log('Hecho'))
  }, [])

  return (
    <div>
      {
        loading ?
        <h2>Cargando...</h2>
        :
        <ItemList productos={productos}/>
      }
      <ItemCount stock={5} inicial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer