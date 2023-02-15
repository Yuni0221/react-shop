import styles from "./Fashion.module.css";

import { Link } from "react-router-dom";

import sweater from "../assets/sweater.jpg";
import bag from "../assets/bag.jpg";
import hat from "../assets/hat.jpg";
import onepiece from "../assets/onepiece.jpg";

function Fashion() {
  return (
    <>
      <div className={styles.mainText}>홈 〉 패션</div>
      <section className={styles.section}>
        <h2 className={styles.subject}>패션</h2>
        <div className={styles.productList}>
          <Link to={"/fashion/detail"} className={styles.productCard}>
            <figure>
              <img className={styles.image} src={sweater} alt="sweater" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                Lemaire - Very Soft Wool Knit
              </p>
              <p className={styles.price}>$122</p>
            </div>
          </Link>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={bag} alt="bag" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                Quiting Chain Luxury baguette Bag
              </p>
              <p className={styles.price}>$280</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={hat} alt="hat" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Cowboy Caramel Hat</p>
              <p className={styles.price}>$88</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={onepiece} alt="onepiece" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Navy Punching onepiece</p>
              <p className={styles.price}>$140</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={onepiece} alt="onepiece" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Navy Punching onepiece</p>
              <p className={styles.price}>$140</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={onepiece} alt="onepiece" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Navy Punching onepiece</p>
              <p className={styles.price}>$140</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={onepiece} alt="onepiece" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Navy Punching onepiece</p>
              <p className={styles.price}>$140</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={onepiece} alt="onepiece" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Navy Punching onepiece</p>
              <p className={styles.price}>$140</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Fashion;
