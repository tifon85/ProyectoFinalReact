
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {

      const db = getFirestore() // crea conexion con Firestore
      const queryProduct = doc(db, 'products', id)
      getDoc(queryProduct) // esto es una promesa
      .then(resp => setProducto( {id: resp.id, ...resp.data()} ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [])

    /*useEffect(()=>{
        getFetch()//llama a la api
        .then((resp)=> {
          setProductos(resp.find(producto => producto.id === id))
          setLoading(false)
        })
        .catch(err => console.log(err))
        .finally(()=> 
        console.log('Hecho, busqueda de detalle producto'))
      }, [])*/
    


  return (
    <div>
        {
            loading ?
            <h2>Cargando...</h2>
            :
            <ItemDetail item={producto}/>
        }
      </div>
  )
}

export default ItemDetailContainer