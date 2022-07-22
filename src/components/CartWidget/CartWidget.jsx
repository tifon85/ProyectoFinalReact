import { BsCart } from "react-icons/bs";
import { useCartContext } from "../../contexts/cartContext"

const CartWidget = () => {

  const { itemCount } = useCartContext()

  return (
    <div className="carrito">
      <BsCart />{itemCount}
    </div>
  )
}

export default CartWidget