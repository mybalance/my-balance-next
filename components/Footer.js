import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Merriweather&family=Merriweather+Sans:wght@400;600&display=swap" 
          rel="stylesheet"
        />  
      </Head>

      <section className={styles.footerContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text}>Copyright 2021 &copy; Carbon Innovations</p>
          <Link href="/privacy">
            <p className={styles.text}><span className={styles.cursor}>Privacy policy</span></p>
          </Link>
          <Link href="/terms">
            <p className={styles.text}><span className={styles.cursor}>Terms and conditions</span></p>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Footer;
