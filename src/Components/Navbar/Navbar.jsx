import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Navbar = ({ children }) => {
  const [catList, setCatList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((res) => {
      let productos = res.docs.map((e) => {
        return {
          ...e.data(),
          id: e.id,
        };
      });
      setCatList(productos);
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

      <CartWidget />
    </div>
  );
};

export default Navbar;
