
import { memo } from 'react'
import Item from '../Item/Item.jsx'

import '../ItemList/items.css'

const ItemList = memo(
  ({productos}) => {
  console.log("itemList")
  return (
    <div className="items">
        {productos.map(prod => <Item key={prod.id} prod={prod} />)}
    </div>
  )
})

export default ItemList