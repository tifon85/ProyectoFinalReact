
import { useCartContext } from "../../contexts/cartContext"
import { Link } from 'react-router-dom'

const OrderGenerate = () => {

    const { saveOrderID, orderID } = useCartContext()

    return (
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
    )
}

export default OrderGenerate