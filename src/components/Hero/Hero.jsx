import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/Hero-headphone.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands of podcast episodes</p>
      </div>

      <div className={styles.visual}>
        <img src={headphones} alt="Headphones" className={styles.heroImg} />
      </div>
    </section>
  );
}
