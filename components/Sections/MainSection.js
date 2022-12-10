import React from "react";
import Waves from "../svg/Waves";
import MobileWaves from "../svg/MobileWaves";
import GogolChatDescription from "./GogolChatDescription";
const MainSection = ({ styles }) => {
  return (
    <>
      <section className={[styles.section, styles.main].join(" ")}>
        <GogolChatDescription styles={styles} />
        <img
          className={[
            styles.messages,
            styles.hiddenRight,
            styles.gogolImg,
          ].join(" ")}
          src="chatting.svg"
          alt="messages"
          height="250"
        />
        <div className={styles.wave1}>
          <Waves styles={styles} />
        </div>
        <div className={styles.mobileWaves}>
          <MobileWaves styles={styles} />
        </div>
      </section>
    </>
  );
};

export default MainSection;
