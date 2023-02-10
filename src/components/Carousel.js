import styles from "./Carousel.module.css";

import slide1 from "../assets/jean.jpg";
import slide2 from "../assets/digital.jpg";
import slide3 from "../assets/food.jpg";
import { useState, useEffect } from "react";

// import { BsCaretLeftFill } from "react-icons/bs";

function Carousel() {
  const [count, setCount] = useState(0);

  const prevBtn = () => {
    setCount((count) => (count > 0 ? count - 1 : 2));
  };
  const nextBtn = () => {
    setCount((count) => (count < 2 ? count + 1 : 0));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      nextBtn();
    }, 3000);
    return () => clearTimeout(interval);
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.carouselSlider}
        // style={{ transform: `translateX(${count * -100}% )` }}
      >
        <img src={slide1} alt="jean" />
        <img src={slide2} alt="digital" />
        <img src={slide3} alt="food" />

        <ul className={styles.button}>
          <li type="button" className={styles.prevBtn} onClick={prevBtn}></li>
          <li type="button" className={styles.nextBtn} onClick={nextBtn}></li>
        </ul>
      </div>
    </div>
  );
}

export default Carousel;
