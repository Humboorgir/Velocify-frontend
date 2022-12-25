// import { useState, useEffect } from "react";
// import styles from "../styles/App.module.css";
// import ChatBox from "../components/ChatBox/ChatBox";
// import Script from "next/script";
// import Head from "next/head";
// import io from "socket.io-client";
// const socket = io("http://localhost:8080");
// export default function app({ Messages }) {
//   const [messages, setMessages] = useState(Messages);
//   const onClick = async () => {
//     let input = document.getElementById("input");
//     if (!input) return console.log("no input");
//     await setMessages([
//       ...messages,
//       { id: messages.length + 1, author: "ilia", text: input.value },
//     ]);
//     await socket.emit("message", {
//       id: messages.length + 1,
//       text: input.value,
//     });
//     let messagebox = document.getElementById("messageBox");
//     if (!messagebox) return console.log("no messagebox");
//     messagebox.scrollTop = messagebox.scrollHeight;
//     input.value = "";
//   };
//   return (
//     <>
//       <Head>
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Gogolchat ~ Web app</title>
//       </Head>
//       <div className={styles.app}>
//         <ChatBox
//           submit={onClick}
//           styles={styles}
//           messages={messages}
//           onClick={onClick}
//         />
//       </div>
//     </>
//   );
// }

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:8080/app", {
//     method: "POST",
//   });
//   let Messages = await res.json();
//   return {
//     props: {
//       Messages,
//     },
//   };
// };
