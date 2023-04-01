import { products } from "../../mockProducts";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { addToCart, getQuantity } = useContext(CartContext);

  const [prodSel, setProdSel] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProdSel({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

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
