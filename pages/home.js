import Head from "next/head";
import HomePage from "../components/Home/HomePage";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
export default function Home() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         if (entry.target.classList.contains(styles.hiddenLeft)) {
  //           entry.target.classList.add(styles.showLeft);
  //         }
  //         if (entry.target.classList.contains(styles.hiddenRight)) {
  //           entry.target.classList.add(styles.showRight);
  //         }
  //         if (entry.target.classList.contains(styles.hiddenTop)) {
  //           entry.target.classList.add(styles.showTop);
  //         }
  //         if (entry.target.classList.contains(styles.hiddenBottom)) {
  //           entry.target.classList.add(styles.showBottom);
  //         }
  //       }
  //     });
  //   });
  //   const hiddenLeft = document.querySelectorAll(`.${styles.hiddenLeft}`);
  //   hiddenLeft.forEach((element) => observer.observe(element));
  //   const hiddenRight = document.querySelectorAll(`.${styles.hiddenRight}`);
  //   hiddenRight.forEach((element) => observer.observe(element));
  //   const hiddenTop = document.querySelectorAll(`.${styles.hiddenTop}`);
  //   hiddenTop.forEach((element) => observer.observe(element));
  //   const hiddenBottom = document.querySelectorAll(`.${styles.hiddenBottom}`);
  //   hiddenBottom.forEach((element) => observer.observe(element));
  //   setTimeout(() => {
  //     const gogolbtn = document.querySelector(`.${styles.gogolchatbtn}`);
  //     gogolbtn.classList.remove(styles.gogolbtn);
  //     gogolbtn.classList.remove(styles.hiddenLeft);
  //     gogolbtn.classList.remove(styles.showLeft);
  //   }, 1600);
  // }, []);
  const [modalOpen, setModalOpen] = useState(false);
  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Velocify ~ Home</title>
      </Head>
      <HomePage
        onClick={() => (modalOpen ? close() : open())}
        modalOpen={modalOpen}
        close={close}
        styles={styles}
      />
    </>
  );
}
