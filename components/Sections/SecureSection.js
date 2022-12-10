import React from "react";

const SecureSection = ({ styles }) => {
  return (
    <>
      <section className={[styles.section, styles.secure].join(" ")}>
        <div className={styles.tempclass}>
          <h1>Test</h1>
          <p>
            Voluptatem a excepturi temporibus non distinctio, iure quos. Dolore
            iure voluptate quis quas nisi accusantium natus quisquam! Quisquam
            repudiandae aperiam, necessitatibus quibusdam nisi, dolore,
            repellendus quidem optio repellat ratione at.
          </p>
        </div>
      </section>
    </>
  );
};

export default SecureSection;
