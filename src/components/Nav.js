import styles from "./Nav.module.css";

import { Link } from "react-router-dom";
import { ReactComponent as Light } from "../assets/Light.svg";
import { ReactComponent as Bag } from "../assets/Bag.svg";

function Nav() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        <a className={styles.title} href="/">
          React Shop
        </a>
        <div className={styles.category}>
          <Link to={"/fashion"} className={styles.button}>
            패션
          </Link>
          <Link to={"/accessory"} className={styles.button}>
            액세서리
          </Link>
          <Link to={"/digital"} className={styles.button}>
            디지털
          </Link>
        </div>
      </h1>

      <div className={styles.option}>
        <Light className={styles.light} />
        <input type="text" className={styles.input} placeholder="검색"></input>
        <Link to={"/cart"} className={styles.bagButton}>
          <Bag className={styles.bag} />
          <span className={styles.circle}>0</span>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
