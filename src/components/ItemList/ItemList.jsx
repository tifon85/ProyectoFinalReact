
import Item from '../Item/Item.jsx'
import '../ItemList/items.css'

function ItemList({productos}) {
  return (
    <div className="items">
        {productos.map(prod => <Item key={prod.id} prod={prod} />)}
    </div>
  )
}

export default ItemList