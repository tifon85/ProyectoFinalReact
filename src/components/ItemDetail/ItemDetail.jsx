
import '../ItemDetail/itemDetail.css'

import ItemCount from '../ItemCount/ItemCount.jsx'

import {useState} from 'react';

import Button from 'react-bootstrap/Button'

import { Link } from 'react-router-dom'

function ItemDetail({item}) {

  const [cantidad, setCantidad] = useState(0);

  const onAdd = (cantidad) => {
    console.log(cantidad)
    setCantidad(cantidad)
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
        {cantidad==0 ?
          <ItemCount stock={5} inicial={1} onAdd={onAdd} />
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