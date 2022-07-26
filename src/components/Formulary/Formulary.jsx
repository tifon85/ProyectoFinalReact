import {useForm} from "react-hook-form";
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useCartContext } from "../../contexts/cartContext"
import '../Formulary/formulary.css'

export const Formulary = () => {

  const { cartList, totalPrice, emptyCart, saveOrderID, changeProcessSale } = useCartContext()

  const {register, formState: {errors}, handleSubmit} = useForm();

  async function createOrder(data) {

    changeProcessSale(true)

    let orden = {}
    
    orden.buyer = {name: data.name, email: data.email, phone: data.phone}
    orden.total = totalPrice()

    orden.items = cartList.map(cartItem => {
        const id = cartItem.id
        const name = cartItem.nombre
        const price = cartItem.precio * cartItem.cantidad
        const amount = cartItem.cantidad
        
        return {id, name, price, amount}
    })

    // insertar la orden
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, orden)
    .then(resp => saveOrderID(resp.id))
    .finally(() => changeProcessSale(false))

    //actualizar el stock
    const queryCollectionStock = collection(db, 'products')

    const queryActulizarStock = await query(
      queryCollectionStock,
      where( documentId() , 'in', cartList.map(it => it.id) ) 
    )

    const batch = writeBatch(db)

    await getDocs(queryActulizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
    })))
    .finally(() => emptyCart())

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
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
            })} />
            {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
            {errors.email?.type === 'pattern' && <p>El formato del mail es incorrecto</p>}
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

export default Formulary;