import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Navbar = ({ children }) => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categorias");
    getDocs(itemsCollection).then((res) => {
      let categorias = res.docs.map((e) => {
        return {
          ...e.data(),
          id: e.id,
        };
      });
      setCatList(categorias);
      const firstCat = catList.length > 0 && catList.find(e => e.title === "Todas")
      const otherCat = catList.length > 0 &&  catList.filter(e => e.title !== "Todas")
      if(catList.length > 0){
        setCatList([firstCat, ...otherCat])
      }
    });
  }, []);

  return (
    <div className={styles.bgDark}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src="https://smokes.mx/src/img/logo.png"
          alt=""
          className={styles.logo}
        />
      </Link>

      <ul className={styles.lista}>
          {catList?.map((e) => {
            return (
              <Link
                key={e.id}
                to={e.path}
                className={styles.links}
              >
                {e.tipo}
              </Link>
            );
          })}
        </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;
