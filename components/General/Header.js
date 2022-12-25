import React from "react";
import { FaSignInAlt } from "react-icons/fa";
const Header = ({ styles }) => {
  return (
    <>
      <header className={styles.header}>
        <ul>
          <li className={styles.hiddenLeft}>
            <a href="/home">Home</a>
          </li>
          <li className={styles.hiddenLeft}>
            <a href="/support">Support</a>
          </li>
          <li className={styles.hiddenLeft}>
            <a href="/credits">Credits</a>
          </li>
          <li className={[styles.hiddenRight, styles.login].join(" ")}>
            <a href="/login">Login</a>
          </li>
          <li className={[styles.hiddenRight, styles.register].join(" ")}>
            <a href="/register">Register</a>
          </li>
          <li
            className={[styles.hiddenRight, styles.mobileLogin].join(" ")}
            style={{ float: "right", visibility: "hidden" }}
          >
            <a href="/register">
              <FaSignInAlt />
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
