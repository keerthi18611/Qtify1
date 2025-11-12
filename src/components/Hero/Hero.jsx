import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands of podcast episodes</p>
      </div>
      <div className={styles.heroImage}>
        <img src={headphones} alt="headphones" />
      </div>
    </div>
  );
}

export default Hero;
