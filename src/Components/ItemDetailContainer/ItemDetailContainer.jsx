import { products } from "../../mockProducts";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const prodSel = products.find((x) => x.id === parseInt(id));

  return (
    <div>
      <h1>{prodSel.nombre}</h1>
      <h3>{prodSel.descripcion}</h3>
      <h3>${prodSel.precio}</h3>
      <img src={prodSel.imagen} alt="" style={{height: 400, width: 400}}/>
    </div>
  );
};

export default ItemDetailContainer;
