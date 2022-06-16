
import {useState,useEffect} from 'react';

import { useParams } from 'react-router-dom';

import { getFetch } from '../../api/productos.js';

import ItemList from '../ItemList/ItemList.jsx'

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  console.log(categoriaId)

  useEffect(()=>{
    if (categoriaId) {
      getFetch()//llama a la api
      .then((resp)=> {
        setProductos(resp.filter(productos => productos.categoria === categoriaId))
        setLoading(false)
      })
      .catch(err => console.log(err))
    }else{
      getFetch()//llama a la api
      .then((resp)=> {
        setProductos(resp)
        setLoading(false)
      })
      .catch(err => console.log(err))
    }
  }, [categoriaId])

  return (
    <div>
      {
        loading ?
          <h2>Cargando...</h2>
          :
          productos.length>0 ?
            <ItemList productos={productos}/>
            :
            <h2>No se encontraron productos para esta categoria</h2>
      }
    </div>
  )
}

export default ItemListContainer