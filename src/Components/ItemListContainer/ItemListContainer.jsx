import Item from "../Item/Item";
import styles from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoria } = useParams();

  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((res) => {
      let productos = res.docs.map((e) => {
        return {
          ...e.data(),
          id: e.id,
        };
      });
      setProdList(productos);
    });
  }, []);

  const prodFiltered = prodList.filter((x) => x.categoria === categoria);

  useEffect(() => {
    categoria ? setProdList(prodFiltered) : setProdList(prodList);
  }, [categoria, prodFiltered]);

  return (
    <div className={styles.greet}>
      <Item prodList={prodList} />
    </div>
  );
};

export default ItemListContainer;
