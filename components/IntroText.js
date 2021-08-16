import React from "react";
import Head from "next/head";
import styles from "../styles/IntroText.module.css";

const IntroText = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <section className={styles.mainContainer}>
        <h1 className={styles.header}>Are you taking steps <span className={styles.headerColour}>towards</span> <span className={styles.headerColour}>net-zero?</span></h1>
        <p className={styles.subheader}>If you care about our planet and believe like we do that it should be here for future generations to enjoy then you likely need to make some lifestyle changes. MyBalance has been designed to help you take those steps to live a low or zero carbon life!</p>
      </section>
    </>
  )
}

export default IntroText;