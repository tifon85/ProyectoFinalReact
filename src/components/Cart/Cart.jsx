
import '../Cart/cart.css'
import { useCartContext } from "../../contexts/cartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"

const Cart = () => {

  const { cart, vaciarCarrito, removeItem, precioTotal} = useCartContext()

  async function createOrder(e) {
    e.preventDefault()
    let orden = {}     
    
    orden.buyer = {name: 'Nicolas', email: 'usuario@prueba.com', phone: '123456789'}
    orden.total = precioTotal()

    orden.items = cart.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.name
        const precio = cartItem.price * cartItem.cantidad
        const cantidad = cartItem.cantidad
        
        return {id, nombre, precio, cantidad}   
    })

    // insertar
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, orden)
    .then(resp => console.log(resp.id) )

    //actualizar el stock
    const queryCollectionStock = collection(db, 'items')

    const queryActulizarStock = await query(
        queryCollectionStock, //                   ['jlksjfdgl','asljdfks'] -> ejemplo del map ,  
        where( documentId() , 'in', cart.map(it => it.id) ) // in es que estén en ..         
    )

    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
          stock: res.data().stock - cart.find(item => item.id === res.id).cantidad
    }) ))
    .finally(()=> vaciarCarrito())

    batch.commit()
  }


  return (
    <div>
      <ul>
        {
          cart.map(item => <li key={item.id}>
            <div className="carrito">
              <div className="contenedorImagenCarrito">
                <img src={item.imagen} className="imagenCarrito" alt="Producto Carrito"/>
              </div>
              <div className="infoCarrito">
                <p>Nombre: {item.nombre}</p>
                <p>Precio: {item.precio}</p>
                <p>Cantidad: {item.cantidad}</p>
              </div>
              <div>
                <button onClick={() => removeItem(item.id)}>Remover Item</button>
              </div>
            </div></li>)
        }
      </ul>
      {
        cart.length === 0 ?
          <>
            <h2>No tiene productos en el carrito</h2>
            <Link to='/'>
            Volver al Catalogo
            </Link>
          </>
          :
          <div className="botonVaciarCarrito">
            <h2>Precio Total: {precioTotal()}</h2>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button onClick={createOrder}>Finalizar Compra</button>
          </div>
      }
    </div>
  )
}

export default Cart