import styles from "./css/header.module.css";
import React from "react";
import { useState } from "react";

const Header = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const themeToggle = () => {
    setDarkMode(!darkMode);
    props.changeTheme();
  };
  return (
    <div>
      <nav className={darkMode ? styles.darkMode : ""}>
        <div className={styles.logo}>
          <h1>Color App</h1>
        </div>
        <div className={styles.navlinks}>
          <a href="">Link1</a>
          <a href=""> Link2</a>
          <a href="">Link3</a>
        </div>
        <div>
          <button className={styles.dark} onClick={themeToggle}>
            Dark
          </button>
        </div>
      </nav>

      <div className={styles.mobileNav}>
        <a href="">Link1</a>
        <a href=""> Link2</a>
        <a href="">Link3</a>
      </div>
    </div>
  );
};

export default Header;
