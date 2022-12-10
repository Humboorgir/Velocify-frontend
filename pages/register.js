import React from "react";
import Head from "next/head";
import styles from "../styles/Register.module.css";
import { useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import Header from "../components/Header";
import Form from "../components/RegisterForm/RegisterForm";
const Register = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains(styles.hiddenLeft)) {
            entry.target.classList.add(styles.showLeft);
          }
          if (entry.target.classList.contains(styles.hiddenRight)) {
            entry.target.classList.add(styles.showRight);
          }
          if (entry.target.classList.contains(styles.hiddenTop)) {
            entry.target.classList.add(styles.showTop);
          }
          if (entry.target.classList.contains(styles.hiddenBottom)) {
            entry.target.classList.add(styles.showBottom);
          }
        }
      });
    });
    const hiddenLeft = document.querySelectorAll(`.${styles.hiddenLeft}`);
    hiddenLeft.forEach((element) => observer.observe(element));
    const hiddenRight = document.querySelectorAll(`.${styles.hiddenRight}`);
    hiddenRight.forEach((element) => observer.observe(element));
    const hiddenTop = document.querySelectorAll(`.${styles.hiddenTop}`);
    hiddenTop.forEach((element) => observer.observe(element));
    const hiddenBottom = document.querySelectorAll(`.${styles.hiddenBottom}`);
    hiddenBottom.forEach((element) => observer.observe(element));
    setTimeout(() => {
      const gogolbtn = document.querySelector(`.${styles.btn}`);
      gogolbtn.classList.remove(styles.transBtn);
      gogolbtn.classList.remove(styles.hiddenTop);
      gogolbtn.classList.remove(styles.showTop);
    }, 1600);
  }, []);
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GogolChat ~ Home</title>
      </Head>
      <Header styles={styles} />
      <Form styles={styles} />
    </div>
  );
};

export default Register;
