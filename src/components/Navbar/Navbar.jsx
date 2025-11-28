import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/qtify-logo.png";
import SearchIcon from "../../assets/Search-icon.svg";

function Navbar() {
  return (
    <nav className={styles.navbar}>

      {/* LEFT LOGO */}
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" className={styles.logoImage} />

      </div>

      {/* CENTER SEARCH BAR */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
        />
        <button className={styles.searchBtn}>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>

      {/* RIGHT BUTTON */}
      <button className={styles.feedbackBtn}>Give Feedback</button>

    </nav>
  );
}

export default Navbar;
