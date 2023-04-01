import { products } from "../../mockProducts";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { addToCart, getQuantity } = useContext(CartContext);

  const prodSel = products.find((x) => x.id === parseInt(id));

  let qty = getQuantity(Number(id));

  const onAdd = (qty) => {
    let product = {
      ...prodSel,
      quantity: qty,
    };
    addToCart(product);
  };

  return (
    <div>
      <ItemDetail prodSel={prodSel} onAdd={onAdd} qty={qty} />
    </div>
  );
};

export default ItemDetailContainer;
