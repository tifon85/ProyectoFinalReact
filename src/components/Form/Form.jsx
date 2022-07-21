import {useForm} from "react-hook-form";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useCartContext } from "../../contexts/cartContext"

export const Form = () => {

  const { cart, precioTotal, vaciarCarrito, setearOrderID } = useCartContext()

  const {register, formState: {errors}, handleSubmit} = useForm(); 

  async function createOrder(data) {
    
    let orden = {}
    
    orden.buyer = {name: data.name, email: data.email, phone: data.phone}
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

  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit(createOrder)}>
          <div>
            <label>Nombre completo</label>
            <input type="text" {...register('name', {
              required: true
            })} />
            {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}
          </div>
          <div>
            <label>Email</label>
            <input type="text" {...register('email',{
              required: true
            })} />
            {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
          </div>
          <div>
            <label>Telefono</label>
            <input type="text" {...register('phone', {
              required: true
            })} />
            {errors.phone?.type === 'required' && <p>El campo Telefono es requerido</p>}
          </div>
          <input type="submit" value="Finalizar Compra"/>
        </form>
    </div>
  )
}

export default Form;