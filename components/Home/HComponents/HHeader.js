import React from "react";

const HHeader = ({ openRegModal, openLogModal, styles }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="velocifyLogo.svg"
          height="60"
          alt="logo"
          className={styles.logoImage}
        />
        <div className={styles.logoText}>Velocify</div>
      </div>
      <ul className={styles.headerUl}>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/terms">Terms of serivce</a>
        </li>
        <li>
          <a href="/download">Download</a>
        </li>
        <li>
          <a href="/support">Support</a>
        </li>
        <li>
          <a href="/articles">Articles</a>
        </li>
      </ul>
      <div className={styles.headerUl2}>
        <a onClick={openRegModal}>Register</a>
        <a onClick={openLogModal} className={styles.headerUl2LastChild}>
          Login
        </a>
      </div>
    </header>
  );
};

export default HHeader;
