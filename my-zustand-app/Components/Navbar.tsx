import React from "react";
import styles from "../styles/navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a href="#section1">Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#section2">About</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#section3">Skills</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#section3">Portfolio</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#section3">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
