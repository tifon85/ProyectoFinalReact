import '../Cart/cart.css'
import { ItemCartList } from '../ItemCartList/ItemCartList.jsx'
import { useCartContext } from "../../contexts/cartContext"
import { Link } from 'react-router-dom'
import { Formulary } from '../Formulary/Formulary.jsx'

const Cart = () => {

  const { cartList, emptyCart, totalPrice, orderID, saveOrderID } = useCartContext()

  return (
    <div>
      <ul>
        {
          <ItemCartList products={cartList}/>
        }
      </ul>
      {
        cartList.length === 0 ?
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
                  <button onClick={() => saveOrderID('')}>Continuar Comprando</button>
                  </Link>
                </>
              )
          :
            <div className="botonVaciarCarrito">
              <h2>Precio Total: ${totalPrice()}</h2>
              <button onClick={emptyCart}>Vaciar Carrito</button>
              <Formulary />
            </div>
      }
    </div>
  )
}

export default Cart