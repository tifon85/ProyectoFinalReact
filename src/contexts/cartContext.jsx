import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextPorvider = ({children}) => {

    //aqui van a estar los estados y funciones globales
    const [cart, setCart] = useState([])
    const [itemCount,setItemCount] = useState(0)

    const [orderID, setOrderID] = useState('')

    const setearOrderID = (orderID) => {
        setOrderID(orderID)
    }

    const addToCart = (item) => {
        let prod = cart.find(producto => producto.id === item.id)
        if(!prod){
            setCart([...cart,item])/*copio todo lo que tiene cart y le agrego el item*/
            setItemCount(itemCount + item.cantidad)
        }else{
            cart.forEach(producto => {
                if(producto.id===item.id){
                    producto.cantidad += item.cantidad;
                }
            });
        }
    }

    const precioTotal = () => {
        return cart.reduce((contador, prod) => contador + (prod.cantidad * prod.precio) ,0)
    }

    const vaciarCarrito = () => {
        setCart([])
        setItemCount(0)
    }

    const removeItem = (itemId) => {
        const prod = cart.find(producto => producto.id === itemId)
        const unidades = prod.cantidad
        if(prod){
            setCart(cart.filter(producto => producto.id !== itemId))
            setItemCount(itemCount - unidades)
        }
    }

    /*const isInCart = (id) => {
        const prod = cart.find(producto => producto.id === id)
        return (!prod ? true:false)
    }*/

    return(
        <CartContext.Provider
            value={{
                cart,
                itemCount,
                orderID,
                setearOrderID,
                addToCart,
                vaciarCarrito,
                removeItem,
                precioTotal
            }/*en este value agrego los estados y funciones que quiero que sean globales en este contexto*/}
        >
            {children}
        </CartContext.Provider>
    )
}