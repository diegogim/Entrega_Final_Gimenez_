import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.bgDark}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src="https://smokes.mx/src/img/logo.png"
          alt=""
          className={styles.logo}
        />
      </Link>
      <div>
        <ul className={styles.lista}>
          <li>
          <Link to="category/BBQ" className={styles.links}>
              BBQ
          </Link>
          </li>
          <li>
          <Link to="category/Sandwiches" className={styles.links}>
              Sandwiches
          </Link>
          </li>
          <li>
          <Link to="category/Sides" className={styles.links}>
              Sides
          </Link>
          </li>
          <li>
          <Link to="category/Postres" className={styles.links}>
              Postres
          </Link>
          </li>
          <li>
          <Link to="category/Refrescos" className={styles.links}>
              Refrescos
          </Link>
          </li>
          <li>
          <Link to="category/Cervezas" className={styles.links}>
              Cervezas
          </Link>
          </li>
          <li>
          <Link to="category/Cocteleria" className={styles.links}>
              Cocteles
          </Link>
          </li>
          <li>
          <Link to="category/Bebidas_Alcoholicas" className={styles.links}>
              Bebidas Alcohólicas
          </Link>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
