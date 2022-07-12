
import '../Cart/cart.css'
import { useCartContext } from "../../contexts/cartContext"
import { Link } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { Form } from '../Form/Form.jsx'
import {useState} from 'react';

const Cart = () => {

  const { cart, vaciarCarrito, removeItem, precioTotal} = useCartContext()

  const [orderID, setOrderID] = useState('')
  const [sale, setSale] = useState(false)

  async function createOrder(name,email,phone) {

    let orden = {}
    
    orden.buyer = {name: name, email: email, phone: phone}
    orden.total = precioTotal()

    orden.items = cart.map(cartItem => {
        const id = cartItem.id
        const nombre = cartItem.nombre
        const precio = cartItem.precio * cartItem.cantidad
        const cantidad = cartItem.cantidad
        
        return {id, nombre, precio, cantidad}
    })

    // insertar la orden
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, orden)
    .then(resp => setOrderID(resp.id), setSale(true))

    //actualizar el stock
    const queryCollectionStock = collection(db, 'products')

    const queryActulizarStock = await query(
      queryCollectionStock,
      where( documentId() , 'in', cart.map(it => it.id) ) 
    )

    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cart.find(item => item.id === res.id).cantidad
    })))
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
                {sale ? <h2>Su orden de compra es: {orderID}</h2> : <h2>No tiene productos en el carrito</h2>}
                <Link to='/'>
                Volver al Catalogo
                </Link>
              </>
          :
            <div className="botonVaciarCarrito">
              <h2>Precio Total: ${precioTotal()}</h2>
              <button onClick={vaciarCarrito}>Vaciar Carrito</button>
              {/*<button onClick={() => createOrder()}>Finalizar Compra</button>*/}
              <Form createOrder={createOrder} />
            </div>
      }
    </div>
  )
}

export default Cart