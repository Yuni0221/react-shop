import styles from "./Product.module.css";

import sweater from "../assets/sweater.jpg";

function Product() {
  return (
    <section className={styles.section}>
      <h2 className={styles.subject}>패션</h2>
      <div className={styles.grid}>
        <a className={styles.card} href="/">
          <figure>
            <img className={styles.image} src={sweater} alt="sweater" />
          </figure>
        </a>
        <a className={styles.card} href="/">
          a
        </a>
        <a className={styles.card} href="/">
          a
        </a>
        <a className={styles.card} href="/">
          a
        </a>
      </div>
    </section>
  );
}

export default Product;
