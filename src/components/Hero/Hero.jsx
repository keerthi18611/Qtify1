import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/Hero-headphone.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h2>Over thousands of podcast episodes</h2>
      </div>

      <div className={styles.visual}>
        <img src={headphones} alt="hero" className={styles.heroImg} />
      </div>
    </div>
  );
}

export default Hero;
