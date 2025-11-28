import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/qtify-logo.png";
import SearchIcon from "../../assets/Search-icon.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar} role="navigation">
      <div className={styles.logoWrapper}>
        <img src={logo} alt="qtify logo" className={styles.logoImage} />
      </div>

      <div className={styles.searchWrapper}>
        <input
  type="text"
  placeholder="Search a song of your choice"
  className={styles.searchInput}
  aria-label="search"
/>

        <button className={styles.searchBtn} aria-label="search-button">
          <img src={SearchIcon} alt="search icon" />
        </button>
      </div>

      <button className={styles.feedbackBtn} aria-label="give-feedback">
        Give Feedback
      </button>
    </nav>
  );
}
