import styles from "./Detail.module.css";

import Footer from "../components/Footer";
import sweater from "../assets/sweater.jpg";

function Detail() {
  return (
    <>
      <div className={styles.mainText}>홈 〉 Lemaire - Very Soft Wool Knit</div>
      <div className={styles.items}>
        <figure>
          <img className={styles.image} src={sweater} alt="sweater" />
        </figure>
        <div className={styles.itemInfo}>
          <h2>Lemaire - Very Soft Wool Knit</h2>
          <p>
            I close my eyes and I can see The world that's waiting up for me
            That I call my own
          </p>
          <p className={styles.price}>$122</p>
          <div>
            <button></button>
            <a></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
