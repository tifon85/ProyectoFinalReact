
import Item from '../Item/Item.jsx'

function ItemList({productos}) {
  return (
    productos.map(prod => <Item key={prod.id} prod={prod} />)
  )
}

export default ItemList