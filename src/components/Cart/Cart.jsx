import '../Cart/cart.css'
import { ItemCartList } from '../ItemCartList/ItemCartList.jsx'
import { useCartContext } from "../../contexts/cartContext"
import EmptyCart from '../EmptyCart/EmptyCart'

const Cart = () => {

  const { cartList } = useCartContext()

  return (
    <div>
      <ul>
        {
          <ItemCartList products={cartList}/>
        }
      </ul>
      {
        <EmptyCart size={cartList.length} />
      }
    </div>
  )
}

export default Cart