import ItemQuantitySelector from "../ItemQuantitySelector/ItemQuantitySelector";

const ItemDetail = ({ prodSel, onAdd, qty }) => {

  return (
    <div>
      <h1>{prodSel.nombre}</h1>
      <h3>{prodSel.descripcion}</h3>
      <h3>${prodSel.precio}</h3>
      <img src={prodSel.imagen} alt="" style={{ height: 400, width: 400 }} />
      <ItemQuantitySelector onAdd={onAdd} stock={prodSel.stock} initial={qty} />
    </div>
  );
};

export default ItemDetail;
