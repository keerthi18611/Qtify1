import React from "react";
import styles from "./Logo.module.css";
import headphoneLogo from "../../assets/headphone-logo.png";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src={headphoneLogo} alt="Headphones" className={styles.icon} />
      <span className={styles.q}>Q</span>
      <span className={styles.tify}>tify</span>
    </div>
  );
}
