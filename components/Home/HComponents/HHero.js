import React from "react";

const HHero = ({ styles }) => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroText}>
        <h1>V E L O C I F Y</h1>
        <p>یه برنامه که گوسفند های خری مثل من توش چت می کنن</p>
        <div className={styles.btnGroup}>
          <a className={styles.download} href="/download">
            <i
              style={{ marginLeft: "0px", marginRight: "10px" }}
              className="fa-solid fa-download"
            ></i>
            Download
          </a>
          <a className={styles.openInBrowser} href="/app">
            Open in your browser
          </a>
        </div>
      </div>
    </div>
  );
};

export default HHero;
