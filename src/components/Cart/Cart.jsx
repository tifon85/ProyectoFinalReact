
import '../Cart/cart.css'

import { useCartContext } from "../../contexts/cartContext"


const Cart = () => {

  const { cart, vaciarCarrito, removeItem} = useCartContext()

  return (
    <div>
      <ul>
        {
          cart.map(item => <li key={item.id}>
            <div className="carrito">
              <div className="contenedorImagenCarrito">
                <img src={item.imagen} className="imagenCarrito"/>
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
      <div className="botonVaciarCarrito">
        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
      </div>
    </div>
  )
}

export default Cart