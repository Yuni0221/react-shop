import styles from "./Carousel.module.css";

import slide1 from "../assets/jean.jpg";
import slide2 from "../assets/digital.jpg";
import slide3 from "../assets/food.jpg";
// import { useState } from "react";

function Carousel() {
  // const [count, setCount] = useState(0);

  // const nextBtn = () => {
  //   setCount((count) => (count < 2 ? count + 1 : 0));
  // };
  // const prevBtn = () => {
  //   setCount((count) => (count > 0 ? count - 1 : 2));
  // };

  return (
    <div className={styles.container}>
      <div className={styles.carouselSlider}>
        <img src={slide1} alt="jean" />
        <img src={slide2} alt="digital" />
        <img src={slide3} alt="food" />

        <ul></ul>
        <span className={styles.buttons}>
          <button className={styles.prevBtn}></button>
          <button className={styles.nextBtn}></button>
        </span>
      </div>
    </div>
  );
}

export default Carousel;
