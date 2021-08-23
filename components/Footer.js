import React from "react";
import Head from "next/head";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <section className={styles.footerContainer}>
        <p className={styles.text}>Copyright 2021 - Carbon Innovations</p>
      </section>
    </>
  )
}

export default Footer;