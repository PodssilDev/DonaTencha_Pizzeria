import React from "react";
import telephone from "../img/telephone.png";
import cart from "../img/cart.png";
import logo from "../img/logo.png";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <img src={telephone} alt="" width="32" height="32" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>PIDE AHORA!</div>
            <div className={styles.text}>+123456789</div>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>Homepage</li>
            <li className={styles.listItem}>Menú</li>
            <img src={logo} alt="" width="160px" height="69px" />
            <li className={styles.listItem}>Arma tu pizza</li>
            <li className={styles.listItem}>Locales</li>
          </ul>
        </div>
        <div className={styles.item}>
          <div className={styles.cart}>
            <img src={cart} alt="" width="30px" height="30px" />
            <div className={styles.counter}>0</div>
          </div>
        </div>
      </div>
    );
  };

export default Navbar;
