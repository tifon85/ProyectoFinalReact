
import {useState} from 'react';

import './ItemCount.css'

function ItemCount({ stock, inicial, onAdd }) {
    const [cont, setCont] = useState(inicial);

    function decrementar() {
      if(cont>1){
        setCont(cont - 1)
      }
    }

    function incrementar() {
      if(cont<stock){
        setCont(cont + 1)
      }
    }

  return (
    <div className="producto">
      <h2>Producto</h2>
      <div>
          <button onClick={decrementar}>-</button>
          {cont}
          <button onClick={incrementar}>+</button>
      </div>
      <button onClick={() => onAdd(cont)}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount