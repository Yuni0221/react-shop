import styles from "./Accessory.module.css";

import ring from "../assets/ring.jpg";
import redring from "../assets/redring.jpg";
import bluenecklace from "../assets/bluenecklace.jpg";
import pearl from "../assets/pearl.jpg";

function Accessory() {
  return (
    <>
      <div className={styles.mainText}>홈 〉 액세서리</div>
      <section className={styles.section}>
        <h2 className={styles.subject}>액세서리</h2>
        <div className={styles.productList}>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={ring} alt="ring" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Gold Diamond Stone Ring</p>
              <p className={styles.price}>$3400</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={redring} alt="redring" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                Black Onyx with Red Heart Box for Valentine
              </p>
              <p className={styles.price}>$560</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img
                className={styles.image}
                src={bluenecklace}
                alt="bluenecklace"
              />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Blue Aquamarine Necklace</p>
              <p className={styles.price}>$312</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={pearl} alt="pearl" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>4 Colors Pearl Earring Set</p>
              <p className={styles.price}>$200</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={pearl} alt="pearl" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>4 Colors Pearl Earring Set</p>
              <p className={styles.price}>$200</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={pearl} alt="pearl" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>4 Colors Pearl Earring Set</p>
              <p className={styles.price}>$200</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={pearl} alt="pearl" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>4 Colors Pearl Earring Set</p>
              <p className={styles.price}>$200</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Accessory;
