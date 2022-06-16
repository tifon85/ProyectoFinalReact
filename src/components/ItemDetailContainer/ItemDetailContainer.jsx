
import {useState, useEffect} from 'react';

import { useParams } from 'react-router-dom'

import { getFetch } from '../../api/productos.js';

import ItemDetail from '../ItemDetail/ItemDetail.jsx';

function ItemDetailContainer() {

    const [item, setProductos] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
        getFetch()//llama a la api
        .then((resp)=> {
          setProductos(resp.find(producto => producto.id === id))
          setLoading(false)
        })
        .catch(err => console.log(err))
        .finally(()=> 
        console.log('Hecho, busqueda de detalle producto'))
      }, [])
    


  return (
    <div>
        {
            loading ?
            <h2>Cargando...</h2>
            :
            <ItemDetail item={item}/>
        }
      </div>
  )
}

export default ItemDetailContainer