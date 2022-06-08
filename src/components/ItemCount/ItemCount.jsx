
import {useState} from 'react';

function ItemCount({stock,inicial}) {
    const [cont, setCont] = useState(1);

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
    <div>
        <button onClick={decrementar}>-</button>
        {cont}
        <button onClick={incrementar}>+</button>
    </div>
  )
}

export default ItemCount