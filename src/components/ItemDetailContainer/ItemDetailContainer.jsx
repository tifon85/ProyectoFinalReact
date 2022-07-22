
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {

      const db = getFirestore() // crea conexion con Firestore
      const queryProduct = doc(db, 'products', id)
      getDoc(queryProduct) // esto es una promesa
      .then(resp => setProduct( {id: resp.id, ...resp.data()} ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }, [id])
    


  return (
    <div>
        {
            loading ?
            <h2>Cargando...</h2>
            :
            <ItemDetail item={product}/>
        }
      </div>
  )
}

export default ItemDetailContainer