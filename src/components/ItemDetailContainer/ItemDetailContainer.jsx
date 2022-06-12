
import {useState} from 'react';
import { useEffect } from 'react'
import { getItem } from '../../api/productos.js';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';

function ItemDetailContainer() {

    const [item, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getItem(4)//llama a la api
        .then((resp)=> {
          setProductos(resp)
          setLoading(false)
        })
        .catch(err => console.log(err))
        .finally(()=>//console.log('Hecho, busqueda de detalle producto')
        console.log(item))
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