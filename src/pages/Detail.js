import styles from "./Detail.module.css";

import { Link } from "react-router-dom";

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
          <h2 className={styles.itemTitle}>Lemaire - Very Soft Wool Knit</h2>
          <p className={styles.itemDetail}>
            I close my eyes and I can see. The world that's waiting up for me
            That I call my own Through the dark, through the door Through where
            no one's been before
          </p>
          <p className={styles.price}>$122</p>
          <div>
            <button className={styles.button}>장바구니에 담기</button>
            <Link to={"/cart"} className={styles.toCart}>
              장바구니로 이동
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
