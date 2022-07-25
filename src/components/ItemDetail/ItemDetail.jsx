
import '../ItemDetail/itemDetail.css'
import ItemCount from '../ItemCount/ItemCount.jsx'
import { useCartContext } from '../../contexts/cartContext.jsx';
import {useState} from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function ItemDetail({item}) {

  const {addToCart} = useCartContext()
  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cantidad) => {
    setCantidad(cantidad)
    addToCart({...item, cantidad})
  }

  return (
    <div className="itemDetail">
      <div>
        <img src={item.imagen} alt="Producto" />
      </div>
      <div className="descripcionItem">
        <h2>{item.nombre}</h2>
        <p>Descripcion: {item.descripcion}</p>
        <i>Precio: ${item.precio}</i>
        {cantidad === 0 ?
          (item.stock===0 ?
            <h2>SIN STOCK</h2>
            :
            <ItemCount stock={item.stock} inicial={1} onAdd={onAdd} />)
          :
          <Link to='/cart'>
            <Button variant="primary">Ir al Carrito</Button>
          </Link>
        }
      </div>
    </div>
  )
}

export default ItemDetail
