import React from "react";
import Head from "next/head";
import styles from "../styles/PopupBox.module.css";

const PopupBox = (props) => {
  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" 
          rel="stylesheet">
        </link>
      </Head>

      <div className={styles.container}>
        <h2 className={styles.header}>Cookies and privacy</h2>
        <p className={styles.text}>In order to provide our customers with the best possible service, we collect a variety of user data. To accept or reject this data collection, please click below.</p>
        <div className={styles.buttonContainer}>
          <div className={styles.buttonReject} onClick={props.rejectCookies}>
            <p className={styles.buttonText}>Reject cookies</p>
          </div>
          <div className={styles.button} onClick={props.acceptCookies}>
            <p className={styles.buttonText}>Accept cookies</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupBox;
