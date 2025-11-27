import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* LEFT LOGO */}
      <a href="/" className={styles.logoLink}>
        <Logo />
      </a>

      {/* CENTER SEARCH BAR */}
      <div className={styles.searchWrapper}>
        <Search
          data={searchData}
          placeholder="Search an album of your choice"
        />
      </div>

      {/* RIGHT FEEDBACK BUTTON */}
      <button className={styles.feedbackBtn}>Give Feedback</button>
    </nav>
  );
}

export default Navbar;
