
import '../Cart/cart.css'
import { useCartContext } from "../../contexts/cartContext"
import { Link } from 'react-router-dom'
import { Form } from '../Form/Form.jsx'

const Cart = () => {

  const { cart, vaciarCarrito, removeItem, precioTotal, orderID, setearOrderID } = useCartContext()

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
              (orderID === '' ?
                <>
                  <h2>No tiene productos en el carrito</h2>
                  <Link to='/'>
                  Volver al Catalogo
                  </Link>
                </>
                :
                <>
                  <h2>Su orden de compra es el: {orderID}</h2>
                  <Link to='/'>
                  <button onClick={() => setearOrderID('')}>Continuar Comprando</button>
                  </Link>
                </>
              )
          :
            <div className="botonVaciarCarrito">
              <h2>Precio Total: ${precioTotal()}</h2>
              <button onClick={vaciarCarrito}>Vaciar Carrito</button>
              <Form />
            </div>
      }
    </div>
  )
}

export default Cart