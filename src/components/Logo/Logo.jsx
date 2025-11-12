import React from "react";
import logo from "../../assets/qtify-logo.png";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <img
      src={logo}
      alt="qtify-logo"
      className={styles.logo}
    />
  );
}

export default Logo;
