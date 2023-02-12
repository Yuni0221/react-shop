import styles from "./Product.module.css";

import sweater from "../assets/sweater.jpg";
import bag from "../assets/bag.jpg";
import hat from "../assets/hat.jpg";
import onepiece from "../assets/onepiece.jpg";
import ring from "../assets/ring.jpg";
import redring from "../assets/redring.jpg";

function Product() {
  return (
    <>
      <section className={styles.section}>
        <h2 className={styles.subject}>패션</h2>
        <div className={styles.productList}>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={sweater} alt="sweater" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                Lemaire - Very Soft Wool Knit
              </p>
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
        </div>
      </section>

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
              <img className={styles.image} src={hat} alt="hat" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                Quiting Chain Luxury baguette Bag
              </p>
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
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subject}>디지털</h2>
        <div className={styles.productList}>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={sweater} alt="sweater" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                Lemaire - Very Soft Wool Knit
              </p>
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
            <figure>
              <img className={styles.image} src={hat} alt="hat" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                Quiting Chain Luxury baguette Bag
              </p>
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
        </div>
      </section>
    </>
  );
}

export default Product;
