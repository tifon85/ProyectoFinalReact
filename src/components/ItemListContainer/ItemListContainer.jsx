import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList.jsx'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

  //const [bool, setBool] = useState(true) 

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {categoriaId} = useParams()

  /*useEffect(() => {

    const db = getFirestore() // crea conexion con Firestore
    const queryCollection = collection(db, 'products')
    getDocs(queryCollection)
    .then(resp => setProductos( resp.docs.map( item => ( {id: item.id, ...item.data()} ) )  ))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  }, [])*/

  useEffect(() => {

    if (categoriaId) {
      const db = getFirestore() // crea conexion con Firestore
      const queryCollection = collection(db, 'products')
      const queryCollectionFilter = query(queryCollection, where('categoria','==',categoriaId))
      getDocs(queryCollectionFilter)
      .then(resp => setProductos( resp.docs.map( item => ({id: item.id, ...item.data()})) ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }else{
      const db = getFirestore() // crea conexion con Firestore
      const queryCollection = collection(db, 'products')
      getDocs(queryCollection)
      .then(resp => setProductos( resp.docs.map( item => ({id: item.id, ...item.data()})) ))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
  }, [categoriaId])

   /*useEffect(()=>{
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
  }, [categoriaId]) */

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