
import '../Cart/cart.css'

import { useCartContext } from "../../contexts/cartContext"

import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart, vaciarCarrito, removeItem} = useCartContext()

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
            <h2>Precio Total: ${cart.reduce((acumulado,item) => acumulado + (item.precio * item.cantidad), 0)}</h2>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          </div>
      }
    </div>
  )
}

export default Cart