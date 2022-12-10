import React from "react";

const GogolChatDescription = ({ styles }) => {
  return (
    <>
      <div className={styles.gogolchat}>
        <span
          className={[styles.hiddenBottom, styles.gogolText].join(" ")}
          style={{ display: "block" }}
        >
          Gogolchat
        </span>
        <p className={[styles.hiddenBottom, styles.description].join(" ")}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi est
          esse magni molestias temporibus consectetur tempore illum earum.
          Magnam, corrupti laudantium excepturi assumenda quasi ipsum expedita
          aperiam officia necessitatibus itaque.
        </p>
        <a
          href="/register"
          className={[
            styles.gogolchatbtn,
            styles.hiddenBottom,
            styles.gogolbtn,
          ].join(" ")}
        >
          Get Started
        </a>
      </div>
    </>
  );
};

export default GogolChatDescription;
