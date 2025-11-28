import React from "react";
import styles from "./Hero.module.css";
import headphones from "../../assets/Hero-headphone.png";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands of curated playlists</p>
      </div>

      <div className={styles.rightContent}>
        <img src={headphones} alt="hero" className={styles.heroImg} />
      </div>
    </div>
  );
}

export default Hero;

