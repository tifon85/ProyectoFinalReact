
import ItemCount from '../ItemCount/ItemCount.jsx'

const ItemListContainer = () => {

  const onAdd = (cantidad) => {
    console.log(cantidad)
  }

  return (
    <div>
      <ItemCount stock={5} inicial={1} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer