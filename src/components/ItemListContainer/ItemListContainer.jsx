import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()


  useEffect(() => {

    const db = getFirestore() // crea conexion con Firestore
    const queryCollection = collection(db, 'products')
    const queryCollectionFilter = categoriaId ? query(queryCollection, where('categoria','==',categoriaId)) : queryCollection
    getDocs(queryCollectionFilter)
    .then(resp => setProducts( resp.docs.map( item => ({id: item.id, ...item.data()})) ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

  }, [categoriaId,])


  return (
    <div>
      {
        loading ?
          <h2>Cargando...</h2>
          :
          products.length>0 ?
            <ItemList products={products}/>
            :
            <h2>No se encontraron productos para esta categoria</h2>
      }
    </div>
  )
}

export default ItemListContainer