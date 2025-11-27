import React from "react";
import styles from "./Logo.module.css";
import logoIcon from "../../assets/Group 3740.svg";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logoIcon} className={styles.icon} alt="QTify Logo" />
      <span>tify</span>
    </div>
  );
}

export default Logo;
