import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      {/* Logo redirects to home */}
      <Link to="/" className={styles.logoLink}>
        <Logo />
      </Link>

      {/* Search bar in the center */}
      <div className={styles.searchWrapper}>
        <Search placeholder="Search a song of your choice" data={searchData} />
      </div>

      {/* Feedback button on the right */}
      <Button text="Give Feedback" />
    </nav>
  );
}

export default Navbar;
