import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextPorvider = ({children}) => {

    //aqui van a estar los estados y funciones globales
    const [cartList, setCart] = useState([])
    const [itemCount,setItemCount] = useState(0)

    const [orderID, setOrderID] = useState('')

    const [processSale,setProcessSale] = useState(false)

    const saveOrderID = (orderID) => {
        setOrderID(orderID)
    }

    const changeProcessSale = (state) => {
        setProcessSale(state)
    }

    const addToCart = (item) => {
        if(!isInCart(item.id)){
            setCart([...cartList,item])/*copio todo lo que tiene cart y le agrego el item*/
            setItemCount(itemCount + item.cantidad)
        }else{
            cartList.forEach(product => {
                if(product.id===item.id){
                    product.cantidad += item.cantidad;
                    setItemCount(itemCount + item.cantidad)
                }
            });
        }
    }

    const totalPrice = () => {
        return cartList.reduce((count, prod) => count + (prod.cantidad * prod.precio) ,0)
    }

    const emptyCart = () => {
        setCart([])
        setItemCount(0)
    }

    const removeItem = (itemId) => {
        if(isInCart(itemId)){
            const prod = searchProduct(itemId)
            const units = prod.cantidad
            setCart(cartList.filter(product => product.id !== itemId))
            setItemCount(itemCount - units)
        }
    }

    const isInCart = (id) => {
        const prod = searchProduct(id)
        return (prod ? true:false)
    }

    const searchProduct = (id) => {
        const prod = cartList.find(product => product.id === id)
        return prod
    }

    return(
        <CartContext.Provider
            value={{
                cartList,
                itemCount,
                orderID,
                processSale,
                saveOrderID,
                addToCart,
                emptyCart,
                removeItem,
                totalPrice,
                changeProcessSale
            }/*en este value agrego los estados y funciones que quiero que sean globales en este contexto*/}
        >
            {children}
        </CartContext.Provider>
    )
}