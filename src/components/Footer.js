import styles from "./Footer.module.css";

import { ReactComponent as Visa } from "../assets/Visa.svg";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Github } from "../assets/github.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkFooter}>
        <a className={styles.zerobase} href="https://zero-base.co.kr">
          제로베이스
        </a>
      </div>
      <ul className={styles.cardList}>
        <li>
          <Visa className={styles.visa} />
        </li>
        <li>
          <Visa className={styles.visa} />
        </li>
        <li>
          <Visa className={styles.visa} />
        </li>
        <li>
          <Visa className={styles.visa} />
        </li>
        <li>
          <Visa className={styles.visa} />
        </li>
        <li>
          <Visa className={styles.visa} />
        </li>
      </ul>
      <div className={styles.link}>
        <a href="https://facebook.com/0base">
          <Facebook className={styles.facebook} />
        </a>
        <a href="https://instagram.com/zerobase.official">
          <Instagram className={styles.instagram} />
        </a>
        <a href="https://github.com/Yuni0221">
          <Github className={styles.github} />
        </a>
      </div>
      <div>
        <p className={styles.copyright}>Copyright © 2023 Zero Base</p>
      </div>
    </footer>
  );
}

export default Footer;
