
import '../ItemDetail/itemDetail.css'

import ItemCount from '../ItemCount/ItemCount.jsx'

function ItemDetail({item}) {

  const onAdd = (cantidad) => {
    console.log(cantidad)
  }

  return (
    <div className="itemDetail">
      <div>
        <img src={item.imagen}/>
      </div>
      <div className="descripcionItem">
        <h2>{item.nombre}</h2>
        <p>Descripcion: {item.descripcion}</p>
        <i>Precio: ${item.precio}</i>
        <ItemCount stock={5} inicial={1} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ItemDetail