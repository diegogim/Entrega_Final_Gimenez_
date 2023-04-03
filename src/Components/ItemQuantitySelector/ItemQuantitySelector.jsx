import { Button } from "@mui/material";
import { useState } from "react";

const ItemQuantitySelector = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const addQty = () => {
    counter < stock && setCounter(counter + 1);
  };

  const subQty = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onClick={subQty}>-</Button>
          <h2>{counter}</h2>
          <Button onClick={addQty}>+</Button>
        </div>
        <Button onClick={() => onAdd(counter)}>Agregar</Button>
      </div>
    </div>
  );
};

export default ItemQuantitySelector;
