import {createContext, useState, useContext} from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextPorvider = ({children}) => {

    //aqui van a estar los estados y funciones globales
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        let prod = cart.find(producto => producto.id === item.id)
        if(prod==undefined){
            setCart([...cart,item])/*copio todo lo que tiene cart y le agrego el item*/
        }else{
            cart.forEach(producto => {
                if(producto.id===item.id){
                    producto.cantidad += item.cantidad;
                }
            });
        }
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const removeItem = (itemId) => {
        const prod = cart.find(producto => producto.id === itemId)
        if(prod!=undefined){
            setCart(cart.filter(producto => producto.id != itemId))
        }
    }

    const isInCart = (id) => {
        const prod = cart.find(producto => producto.id === id)
        return (prod==undefined ? true:false)
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                vaciarCarrito,
                removeItem,
                isInCart
            }/*en este value agrego los estados y funciones que quiero que sean globales en este contexto*/}
        >
            {children}
        </CartContext.Provider>
    )
}