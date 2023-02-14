import styles from "./Digital.module.css";

import camera from "../assets/camera.jpg";
import phone from "../assets/phone.jpg";
import audio from "../assets/audio.jpg";
import earphone from "../assets/earphone.jpg";

function Digital() {
  return (
    <>
      <div className={styles.mainText}>홈 〉 디지털</div>
      <section className={styles.section}>
        <h2 className={styles.subject}>디지털</h2>
        <div className={styles.productList}>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={camera} alt="camera" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>80's Retro Analogue Camera</p>
              <p className={styles.price}>$2000</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={phone} alt="phone" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                256GB PSD SmartPhone - Space Grey color
              </p>
              <p className={styles.price}>$980</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={audio} alt="audio" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>Musical Button Streo Audio</p>
              <p className={styles.price}>$190</p>
            </div>
          </a>
          <a className={styles.productCard} href="/">
            <figure>
              <img className={styles.image} src={earphone} alt="earphone" />
            </figure>
            <div className={styles.productInfo}>
              <p className={styles.productTitle}>
                Earbuds3 Silver Color with Space Grey Case
              </p>
              <p className={styles.price}>$199</p>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Digital;
