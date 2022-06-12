
import '../ItemDetail/itemDetail.css'

function ItemDetail({item}) {
  return (
    <div className="itemDetail">
      <div>
        <img src={item.imagen}/>
      </div>
      <div className="descripcionItem">
        <h2>{item.nombre}</h2>
        <p>Descripcion: {item.descripcion}</p>
        <i>Precio: ${item.precio}</i>
      </div>
    </div>
  )
}

export default ItemDetail