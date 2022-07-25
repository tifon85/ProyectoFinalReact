
import { memo } from 'react'
import Item from '../Item/Item.jsx'

import '../ItemList/items.css'

const ItemList = memo(
  ({products}) => {
  return (
    <div className="items">
        {products.map(prod => <Item key={prod.id} prod={prod} />)}
    </div>
  )
})

export default ItemList
