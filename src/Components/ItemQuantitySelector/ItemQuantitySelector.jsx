import { Button } from "@mui/material";
import { useState } from "react";

const ItemQuantitySelector = ({stock, initial=1, onAdd}) => {
    const [counter, setCounter] = useState(initial);

    const addQty = () => {
        counter < stock && setCounter(counter + 1);
      };
    
      const subQty = () => {
        counter > 1 && setCounter(counter - 1);
        }

    return (
        <div>
            <div>
                <h2>{counter}</h2>
                <Button onClick={addQty}>+</Button>
                <Button onClick={subQty}>-</Button>
                <Button onClick={ ()=> onAdd(counter) }>Agregar al carrito</Button>
            </div>
        </div>
  )
}

export default ItemQuantitySelector