import styles from "./Nav.module.css";
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
          <a className={styles.button} href="/">
            패션
          </a>
          <a className={styles.button} href="/">
            액세서리
          </a>
          <a className={styles.button} href="/">
            디지털
          </a>
        </div>
      </h1>

      <div className={styles.option}>
        <Light className={styles.light} />
        <input type="text" className={styles.input} placeholder="검색"></input>
        <a className={styles.bagButton} href="/">
          <Bag className={styles.bag} />
        </a>
      </div>
    </div>
  );
}

export default Nav;
