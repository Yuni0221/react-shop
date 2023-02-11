import styles from "./Product.module.css";

import sweater from "../assets/sweater.jpg";
import bag from "../assets/bag.jpg";

function Product() {
  return (
    <section className={styles.section}>
      <h2 className={styles.subject}>패션</h2>
      <div className={styles.productList}>
        <a className={styles.productCard} href="/">
          <figure>
            <img className={styles.image} src={sweater} alt="sweater" />
          </figure>
          <div className={styles.productInfo}>
            <p className={styles.productTitle}>Lemaire - Very Soft Wool Knit</p>
            <p className={styles.price}>$122</p>
          </div>
        </a>
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
          a
        </a>
        <a className={styles.productCard} href="/">
          a
        </a>
      </div>
    </section>
  );
}

export default Product;
