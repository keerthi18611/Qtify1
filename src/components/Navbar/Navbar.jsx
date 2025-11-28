import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/qtify-logo.png";
import headphone from "../../assets/headphone-logo.png";
import SearchIcon from "../../assets/Search-icon.svg";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>

      {/* LEFT LOGO */}
      <div className={styles.logoWrapper}>
        <img src={headphone} className={styles.logoImage} alt="Headphone" />
        <span className={styles.logoText}>Q tify</span>
      </div>

      {/* CENTER SEARCH BAR */}
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search a album of your choice"
          className={styles.searchInput}
        />
        <button className={styles.searchBtn}>
          <img src={SearchIcon} alt="Search" />
        </button>
      </div>

      {/* RIGHT FEEDBACK BTN */}
      <button className={styles.feedbackBtn}>Give Feedback</button>

    </nav>
  );
}

export default Navbar;
