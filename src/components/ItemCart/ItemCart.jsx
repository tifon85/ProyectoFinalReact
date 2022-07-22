import '../ItemCart/itemCart.css'
import { useCartContext } from "../../contexts/cartContext"

function ItemCart({prod}) {

    const { removeItem } = useCartContext()

  return (
    <div className="carrito">
        <div className="contenedorImagenCarrito">
            <img src={prod.imagen} className="imagenCarrito" alt="Producto Carrito"/>
        </div>
        <div className="infoCarrito">
            <p>Nombre: {prod.nombre}</p>
            <p>Precio: {prod.precio}</p>
            <p>Cantidad: {prod.cantidad}</p>
        </div>
        <div>
            <button onClick={() => removeItem(prod.id)}>Remover Item</button>
        </div>
    </div>
  )
}

export default ItemCart