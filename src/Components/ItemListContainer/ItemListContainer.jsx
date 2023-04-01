import Item from "../Item/Item";
import styles from "./ItemListContainer.module.css";
import { products } from "../../mockProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoria } = useParams();

  const [prodList, setProdList] = useState([]);

  const prodFiltered = products.filter((x) => x.categoria === categoria);

  useEffect(() => {
    categoria ? setProdList(prodFiltered) : setProdList(products);
  }, [categoria, prodFiltered]);

  console.log(prodList);

  return (
    <div className={styles.greet}>
      <Item prodList={prodList} />
    </div>
  );
};

export default ItemListContainer;
