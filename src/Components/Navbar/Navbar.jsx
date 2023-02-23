import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.bgDark}>
      <img
        src="https://smokes.mx/src/img/logo.png"
        alt=""
        className={styles.logo}
      />
      <div>
        <ul className={styles.lista}>
          <li>
            <a href="#" className={styles.links}>BBQ</a>
          </li>
          <li>
            <a href="#" className={styles.links}>Sides</a>
          </li>
          <li>
            <a href="#" className={styles.links}>Postres</a>
          </li>
        </ul>
      </div>
      <div>
        <CartWidget/>
      </div>
    </div>
  );
};

export default Navbar;
