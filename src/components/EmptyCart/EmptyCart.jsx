import { useCartContext } from "../../contexts/cartContext"
import Formulary from "../Formulary/Formulary"
import ProcessSale from "../ProcessSale/ProcessSale"


const EmptyCart = ( {size} ) => {

    const { emptyCart, totalPrice } = useCartContext()

    return (
        size === 0 ?
                <ProcessSale />
            :
                <div className="botonVaciarCarrito">
                    <h2>Precio Total: ${totalPrice()}</h2>
                    <button onClick={emptyCart}>Vaciar Carrito</button>
                    <Formulary />
                </div>
    )
}

export default EmptyCart