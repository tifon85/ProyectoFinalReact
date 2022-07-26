import { useCartContext } from "../../contexts/cartContext"
import OrderGenerate from "../OrderGenerate/OrderGenerate"


const ProcessSale = () => {

    const { processSale } = useCartContext()

    return (
        processSale === true ?
            <h2>Procesando Compra...</h2>
            :
            <OrderGenerate />
    )
}

export default ProcessSale