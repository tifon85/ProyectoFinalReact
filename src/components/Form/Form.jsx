
import '../Form/form.css'
import {useState} from 'react';
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useCartContext } from "../../contexts/cartContext"

export const Form = () => {

    const { cart, precioTotal, vaciarCarrito, setearOrderID } = useCartContext()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

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
    .then(resp => setearOrderID(resp.id))

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

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(name, email, phone)
  }

  return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    //className="form-control"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    //className="form-control"
                    id="Email"
                    placeholder="Ingrese su Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    //className="form-control"
                    id="Phone"
                    placeholder="Ingrese su telefono"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Finalizar compra</button>
        </form>
  )

}

export default Form