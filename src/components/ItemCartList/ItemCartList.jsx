import ItemCart from '../ItemCart/ItemCart.jsx'

export const ItemCartList = (
  ({products}) => {
  return (
    <div>
        {products.map(prod => <ItemCart key={prod.id} prod={prod} />)}
    </div>
  )
})

export default ItemCartList