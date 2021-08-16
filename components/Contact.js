import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const handleClick = () => {
    console.log("Clicked.")
  }

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter"
          rel="stylesheet"
        />
      </Head>

      <section className={styles.mainContainer} id="contact">
        <h1 className={styles.header}><span className={styles.headerColour}>Fancy a chat?</span></h1>
        <p className={styles.subheader}>Etiam odio justo, rhoncus venenatis faucibus sed, suscipit eleifend justo. Donec quam ante, commodo eu vehicula vel, scelerisque fermentum sapien.</p>
        <div className={styles.button} onClick={() => handleClick()}>Email</div>
      </section>
    </>
  )
}

export default Contact;