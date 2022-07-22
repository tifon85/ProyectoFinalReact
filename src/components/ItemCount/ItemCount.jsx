
import {useState} from 'react';

import './ItemCount.css'

function ItemCount({ stock, inicial, onAdd }) {
    const [count, setCount] = useState(inicial);

    function decrease() {
      if(count>1){
        setCount(count - 1)
      }
    }

    function increase() {
      if(count<stock){
        setCount(count + 1)
      }
    }

  return (
    <div className="producto">
      <h2>Producto</h2>
      <div>
          <button onClick={decrease}>-</button>
          {count}
          <button onClick={increase}>+</button>
      </div>
      <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount