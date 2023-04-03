import Item from "../Item/Item";
import styles from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoria } = useParams();

  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "productos");

    let usedDb = undefined;

    if (categoria) {
      const q = query(itemsCollection, where("categoria", "==", categoria));
      usedDb = getDocs(q);
    } else {
      usedDb = getDocs(itemsCollection);
    }

    usedDb.then((res) => {
      let productos = res.docs.map((e) => {
        return {
          ...e.data(),
          id: e.id,
        };
      });
      setProdList(productos);
    });
  }, [categoria]);

  return (
    <div className={styles.greet}>
      <Item prodList={prodList} />
    </div>
  );
};

export default ItemListContainer;
